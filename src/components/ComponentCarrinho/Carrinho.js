import React from "react";
import * as All from "./Carrinho.styles";
import { Button } from "@material-ui/core";

export default class Carrinho extends React.Component {
  render() {
    return (
      <All.ContainerItem>
        <Button
          onClick={this.props.BotaoVoltar}
          variant="outlined"
          color="primary"
        >
          Voltar
        </Button>

        <All.Items>
          <h3>Titulo do serviço</h3>

          <div>
            <p>R$ 400,00</p>
            <Button variant="contained">Remover</Button>
          </div>
        </All.Items>

        <All.Total>
          <h3>
            Valor Total: <span>R$ 400,00</span>
          </h3>

          <Button variant="contained">Contratar Serviço</Button>
        </All.Total>
      </All.ContainerItem>
    );
  }
}
