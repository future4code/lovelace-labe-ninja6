import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  Button {
    margin: 20px auto;
  }
`;
const EstiloMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  background-color: #aaabb8;
  border-radius: 5px;
  width: 70%;
  margin: 0px auto;

  h2 {
    margin: 20px auto;
    font-size: 40px;
    font-weight: 600;
    color: #25274d;
  }

  > Button {
    margin: 20px auto;
    color: #aaabb8;
  }

  > div {
    margin: 10px;
  }
  @media (min-width: 0px) {
    width: 95%;
    margin: 4px;
    Button {
      margin: 4px;
    }
  }
  @media (min-width: 768px) {
    margin: 7px;
  }
`;

const EstiloFormasPagato = styled.div`
  border: 1px solid #25274d;
  color: #25274d;
  label {
    font-size: 23px;
    margin-left: 10px;
  }

  div {
    width: 99%;
    margin: 0 0 3px 3px;
  }
`;

const getCurrentDate = () => {
  const data = new Date(Date.now())
  const mes = ("0" + (data.getMonth() + 1)).slice(-2)
  const ano = data.getFullYear()
  let dia = Number(data.getDay()) + 2
  dia = ("0" + dia.toString()).slice(-2)


  return `${ano}-${mes}-${dia}`
}

export default class QueroSerUmNinja extends React.Component {
  state = {
    titulo: "",
    preco: "",
    descricao: "",
    formasPagato: [],
    prazo: getCurrentDate(),
  };

  handleChange = (event) => {
    const novoObjeto = event.target.value;
    const novoArray = [novoObjeto];
    this.setState({ formasPagato: novoArray });
  };
  alteraInputPreco = (event) => {
    this.setState({ preco: event.target.value });
  };
  alteraInputDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };
  alteraInputPrazo = (event) => {
    this.setState({ prazo: event.target.value });
  };
  alteraInputTitulo = (event) => {
    this.setState({ titulo: event.target.value });
  };

  adicionaServico = () => {

    const url = "https://labeninjas.herokuapp.com/jobs";
    const headers = {
      headers: {
        Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
      },
    };
    const precoNumero = parseFloat(this.state.preco);
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: precoNumero,
      paymentMethods: this.state.formasPagato,
      dueDate: this.state.prazo,
    };

    axios
      .post(url, body, headers)
      .then((resp) => {
        alert("Serviço cadastrado com sucesso!");
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <MainContainer>
          <Button onClick={this.props.BotaoVoltar} variant="contained">
            Voltar
          </Button>

          <EstiloMain>
            <h2>Cadastre seu serviço</h2>

            <TextField
              id="outlined-basic"
              label="Título do serviço"
              variant="outlined"
              value={this.state.titulo}
              onChange={this.alteraInputTitulo}
            />
            <TextField
              id="outlined-basic"
              label="Descrição do serviço"
              variant="outlined"
              value={this.state.descricao}
              onChange={this.alteraInputDescricao}
            />
            <TextField
              id="outlined-basic"
              label="Preço do serviço"
              variant="outlined"
              value={this.state.preco}
              onChange={this.alteraInputPreco}
            />

            <EstiloFormasPagato>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Formas de pagamentos
              </InputLabel>
              <div>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.formasPagato}
                  onChange={this.handleChange}
                  label="Formas de pagamentos"
                >
                  <MenuItem value="cartão de crédito">
                    Cartão de crédito
                  </MenuItem>
                  <MenuItem value="cartão de débito">Cartão de débito</MenuItem>
                  <MenuItem value="pix">Pix</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="boleto">Boleto</MenuItem>
                </Select>
              </div>
            </EstiloFormasPagato>

            <TextField
              id="date"
              label="Prazo"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.prazo}
              onChange={this.alteraInputPrazo}
            />

            <Button
              onClick={this.adicionaServico}
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
          </EstiloMain>
        </MainContainer>
      </div>
    );
  }
}
