import React from "react";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const StyledContainerContratar = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 9fr;

`;

const StyledContainerControles = Styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const StyledContainerBusca = Styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
    background: gray;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5%;
    margin: 10px;
    min-width: 120px;
    
    input {
        width: 50%;
        min-width: 100px;
        margin-top: 20px;
    }

    input:nth-child(1) {
        min-width: 10px;
        width: 80%;
        margin-bottom: 20px;
    }
`;
const StyledContainerCards = Styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    background: gray;
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
`;

export default class Contratar extends React.Component {
  render() {
    return (
      <StyledContainerContratar>
        <StyledContainerControles>
          <button>Voltar</button>
        </StyledContainerControles>

        <StyledContainerBusca>
          <input />
          <input />
          <input />
          <input />
        </StyledContainerBusca>

        <StyledContainerCards>
          <StyledCardServico>
            <h4>Título do Serviço</h4>
            <p>
              Prazo por <strong>Preço</strong>
            </p>
            <div>
              <Button variant="contained">Ver detalhes</Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
              >
                Adicionar
              </Button>
            </div>
          </StyledCardServico>
          <StyledCardServico />
          <StyledCardServico />
          <StyledCardServico />
          <StyledCardServico />
          <StyledCardServico />
          <StyledCardServico />
        </StyledContainerCards>
      </StyledContainerContratar>
    );
  }
}
