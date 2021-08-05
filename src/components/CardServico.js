import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ContaingerPagina = styled.div`
  width: 100vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerServico = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  width: 750px;
  height: 600px;
  box-sizing: border-box;
  background-color: #AAABB8;
  color: #25274d;
  border-radius: 5px;
`

const Servico = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  div {
    margin: 20px auto;
    text-align: center;


    p {
      padding: 20px;
    }

    span {
      background: #25274D;
      border-radius: 20%;
      padding: 10px;
      margin: auto 10px;
      color: #AAABB8;
    }
  }

  Button {
    width: 50%;
    margin: 5px auto;
  }
`

export default class CardServico extends React.Component {
    render() {
        return (
            <ContaingerPagina>
                <ContainerServico>
                    {this.props.Job.map((job) => {
                        const date = new Date(job.dueDate)
                        return (
                            <Servico key={job.id}>
                                <h1>{job.title}</h1>

                                <div>
                                    <p>{job.description}</p>

                                    <p>
                                        Prazo:{" " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()} por <strong>{" " + job.price.toLocaleString("pt-BR", {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}</strong>
                                    </p>

                                    <p>Aceita: {job.paymentMethods.map((payment) => {
                                        return <span>{payment}</span>
                                    })}</p>
                                </div>

                                <Button variant="contained" color="primary">
                                    Adicionar ao Carrinho
                                </Button>

                                <Button
                                    onClick={this.props.BotaoVoltar}
                                    variant="contained">Voltar para Lista de Serviços</Button>
                            </Servico>
                        )
                    })}

                </ContainerServico>
            </ContaingerPagina>
        );
    }
}
