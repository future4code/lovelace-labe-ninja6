import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ContaingerPagina = styled.div`
  width: 100vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerServico = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  border: 1px solid black;
  width: 750px;
  height: 600px;
  box-sizing: border-box;
  background-color: aliceblue;
  color: #25274d;

  h1,
  p {
    margin: 20px;
  }

  Button {
    margin: 20px;
  }
`;

export default class CardServico extends React.Component {
  render() {
    return (
      <ContaingerPagina>
        <ContainerServico>
          <h1>Título do Serviço </h1>
          <p>
            <strong>Aceita: </strong>
          </p>
          <p>
            Prazo: por <strong>Preço</strong>
          </p>
          <p>Descrição</p>
          <Button variant="contained" color="primary">
            Adicionar ao Carrinho
          </Button>
          <br></br>
          <Button variant="contained">Voltar para Lista de Serviços</Button>
        </ContainerServico>
      </ContaingerPagina>
    );
  }
}
