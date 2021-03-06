import React from "react";
import Styled from "styled-components";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  Input,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import axios from "axios";

const StyledContainerContratar = Styled.div`


    @media (min-width: 320px) {
      display: flex;
      flex-direction: column;
      }
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      }
    @media (min-width: 1200px) {
    width: 100%;
    min-height: 94.2vh;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 9fr;

      }
`;

const StyledContainerControles = Styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    Button{
    background: #AAABB8;
    
    :hover{
      background: #AAABB8;
    }
    }
`;

const StyledContainerBusca = Styled.div`

    @media (min-width: 320px ) {
      display: flex;
      flex-direction: column;
      background: #AAABB8;
      padding: 2%;
      margin: 5px auto;
      justify-content: center;
      align-items: center;
      max-height: 250px;
      width: 90%;
      max-width:500px;
      
      
      }

    @media (min-width: 768px) {
    min-width: 500px;
            margin: 5px auto;
           
      }
    @media (min-width: 1200px) {


      grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
    background: #AAABB8;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5%;
    margin: 10px;
    min-width: 120px;

      }
    
`;

const StyledInputBuscar = Styled(Input)`
    min-width: 10px;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 10px;
    background: white;
`;
const StyledFormControl = Styled(FormControl)`
    width: 50%;
    min-width: 100px;
    margin-top: 20px;
    background: white;
    padding: 5px;
`;
const StyledInput = Styled(Input)`
    width: 50%;
    min-width: 100px;
    margin-top: 20px;
    padding-left: 10px;
    background: white;
`;

const StyledContainerCards = Styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    background: #AAABB8;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
    margin: 10px 10px 0 10px;
`;
const StyledCardServico = Styled.div`
    width: 32%;
    min-width: 300px;
    height: 200px;
    margin: 4px;
    background: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #25274d;
    h4, p {
        margin: 10px;

    }
    font-size:1.4em; 
    div {
        display: flex;
        width: 60%;
        justify-content: space-around;
        margin: 10px;
    }
    Button {
      margin: 5px;
      min-width: 130px;
    }
`;

const StyledLoading = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10vh;

    p {
      color: white;
      font-size: 2rem;
    }
`;

export default class Contratar extends React.Component {
  state = {
    listaDeServicos: [],
    inputBuscar: "",
    inputOrdenar: "",
    inputValorMinimo: -Infinity,
    inputValorMaximo: Infinity,
  };

  componentDidMount() {
    this.mostraALista();
  }

  adicionarCarrinho = async (id_job) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id_job}`;
    const headers = {
      headers: {
        Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
      },
    };
    const body = {
      taken: true
    };
    try {
      const res = await axios.post(url, body, headers)

      if (res.status === 200) {
        await this.mostraALista()
        this.props.AddQtdCarrinho();
        alert('Servi??o adicionado com sucesso!')
      }
      else {
        throw new Error('Falha ao tentar adicionar servi??o :(')
      }

    } catch (erro) {
      alert(erro.response.data.error)
    }
  }

  mostraALista = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    const headers = {
      headers: {
        Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
      },
    };

    axios
      .get(url, headers)
      .then((resp) => {
        
        const listaDeServicosDisponiveis = resp.data.jobs.filter(servico => {
          return !servico.taken
        })

        this.setState({ listaDeServicos: listaDeServicosDisponiveis });
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  render() {
    if (!this.state.listaDeServicos.length)
      return (
        <StyledLoading>
          <p>Loading...</p>
        </StyledLoading>
      );

    const listaFiltrada = this.state.listaDeServicos
      .filter((produto) => {
        const aProcurar = produto.title.toLowerCase();
        return aProcurar.includes(this.state.inputBuscar.toLowerCase());
      })
      .filter((produto) => {
        return produto.price < this.state.inputValorMaximo;
      })
      .filter((produto) => {
        return produto.price > this.state.inputValorMinimo;
      })
      .sort((produtoA, produtoB) => {
        if (produtoA === produtoB) return 0;

        switch (this.state.inputOrdenar) {
          case "titulo":
            if (produtoA.title.toLowerCase() > produtoB.title.toLowerCase())
              return 1;
            else return -1;

          case "precoCrescente":
            if (produtoA.price > produtoB.price) return 1;
            else return -1;

          case "precoDecrescente":
            if (produtoA.price < produtoB.price) return 1;
            else return -1;

          case "prazo":
            if (Date.parse(produtoA.dueDate) > Date.parse(produtoB.dueDate))
              return 1;
            else return -1;

          default:
            return 0;
        }
      });

    const listaFinalServicos = listaFiltrada.map((servico) => {
      const date = new Date(servico.dueDate);
      return (
        <StyledCardServico key={servico.id}>
          <h4>{servico.title}</h4>
          <p>
            Prazo: {date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()} por apenas <strong>
              {servico.price.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}
            </strong>
          </p>
          <div>
            <Button
              onClick={() => this.props.VerDetalhes(servico.id)}
              variant="contained">Ver detalhes</Button>
            <Button id={servico.id}
              onClick={() => this.adicionarCarrinho(servico.id)}
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
            >
              Adicionar
            </Button>
          </div>
        </StyledCardServico>
      );
    });

    return (
      <StyledContainerContratar>
        <StyledContainerControles>
          <Button
            onClick={this.props.BotaoVoltar}
            variant="outlined"
            color="primary"
          >
            Voltar
          </Button>
        </StyledContainerControles>

        <StyledContainerBusca>
          <StyledInputBuscar
            placeholder="Buscar"
            value={this.state.inputBuscar}
            onChange={(e) => this.setState({ inputBuscar: e.target.value })}
          />

          <StyledFormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">
              Ordenar
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="ordenar"
              value={this.state.inputOrdenar}
              onChange={(e) => this.setState({ inputOrdenar: e.target.value })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="precoCrescente">Pre??o - Crescente</MenuItem>
              <MenuItem value="precoDecrescente">Pre??o - Decrescente</MenuItem>
              <MenuItem value="prazo">Prazo</MenuItem>
              <MenuItem value="titulo">T??tulo</MenuItem>
            </Select>
          </StyledFormControl>
          <StyledInput
            placeholder="Valor m??ximo"
            onChange={(e) => {
              if (e.target.value)
                this.setState({ inputValorMaximo: Number(e.target.value) });
              else this.setState({ inputValorMaximo: Infinity });
            }}
          />
          <StyledInput
            placeholder="Valor m??nimo"
            onChange={(e) => {
              if (e.target.value)
                this.setState({ inputValorMinimo: Number(e.target.value) });
              else this.setState({ inputValorMinimo: -Infinity });
            }}
          />
        </StyledContainerBusca>

        <StyledContainerCards>{listaFinalServicos}</StyledContainerCards>
      </StyledContainerContratar>
    );
  }
}
