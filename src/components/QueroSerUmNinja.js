import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { number } from "yargs";


// const Hearder = styled.div `
//     background-color: #7869bf;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px;
//     min-width: 200px;
//     height: 5vh;
//     >div{
//         background-color: #7869bf;
//          display: flex;
//         height: 100%;
//         padding: 0 10px;
//         align-items: center;
//         >div{
//             margin-left: 10px;
//             color: #f6f4fa;
//         }
//     }
//
// `
const EstiloMain = styled.div`
display: flex;
flex-direction: column;
padding: 20%;
>button{
    margin: 20px  auto;
}
>div{
    margin: 10px ;
}
`
const EstiloFormasPagato = styled.div`
    border: 1px solid #c3c3c9;
    
    label{
        font-size: 23px;
        margin-left: 10px;
    }
  }
`;
const EstiloMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20%;
  > button {
    margin: 20px auto;
  }
  > div {
    margin: 10px;
  }
`;
const EstiloFormasPagato = styled.div`
  border: 1px solid #c3c3c9;

  label {
    font-size: 23px;
    margin-left: 10px;
  }

  div {
    width: 99%;
    margin: 0 0 3px 3px;
  }
`;

export default class QueroSerUmNinja extends React.Component {
  state = {
    titulo: "",
    preco: "",
    descricao: "",
    formasPagato: "",
    prazo: "",
  };
  handleChange = (event) => {
    this.setState({ formasPagato: event.target.value });
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
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: number(this.state.preco),
      paymentMethods: this.state.formasPagato,
      dueDate: "2021-12-30",
    };

    axios
      .post(url, body, headers)
      .then((resp) => {
        alert("Sucesso", resp);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  render() {
    return (
      <div>

        <main>
          <EstiloMain>
            <Button
              onClick={this.props.onClickVoltar}
              variant="contained">Voltar</Button>

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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Cartão de crédito</MenuItem>
                  <MenuItem value={20}>Cartão de débito</MenuItem>
                  <MenuItem value={30}>Pix</MenuItem>
                  <MenuItem value={40}>PayPal</MenuItem>
                  <MenuItem value={50}>Boleto</MenuItem>
                </Select>
              </div>
            </EstiloFormasPagato>
            <Button
              onClick={this.adicionaServico}
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
          </EstiloMain>
        </main>
      </div>
    );
  }
}
