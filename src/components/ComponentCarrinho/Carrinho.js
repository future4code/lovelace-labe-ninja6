import React from 'react'
import * as All from "./Carrinho.styles"
import {Button} from "@material-ui/core";
import axios from 'axios';


export default class Carrinho extends React.Component {
    state = {
        carrinho: []
    }

    componentDidMount() {
        this.pegarListaCarrinho()
    }

    pegarListaCarrinho = () => {
        const url = "https://labeninjas.herokuapp.com/jobs";
        const headers = {
            headers: {
                Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
            },
        }

        axios
            .get(url, headers)
            .then((resp) => {
                const jobsSelecionados = resp.data.jobs.filter((job) => {
                    return job.taken === true
                })

                this.setState({carrinho: jobsSelecionados});

            })
            .catch((erro) => {
                alert(erro.response.data.error);
            });
    };

    removerServico = async (event) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${event.currentTarget.id}`;
        const headers = {
            headers: {
                Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
            },
        }

        const body = {
            taken: false
        }

        try {
            await axios.post(url, body, headers)
            await this.pegarListaCarrinho()
            this.props.DelQtdCarrinho();
            alert('Serviço removido com sucesso!')
        } catch (erro) {
            alert(erro.response.data.error)
        }
    }

    totalCarrinho = () => {
        let valorTotal = 0
        for (let job of this.state.carrinho) {
            valorTotal += job.price
        }

        return valorTotal.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})
    }

    contratarServico = (carrinho) => {
        carrinho.map((item) => {
            const url = `https://labeninjas.herokuapp.com/jobs/${item.id}`;
            const headers = {
                headers: {
                    Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
                },
            }

            axios.delete(url, headers)
                .then((response) => {
                    alert("Agradecemos por contratar com a gente!")
                    this.pegarListaCarrinho()
                }).catch((erro) => {
                alert(erro.response.data.error)
            })
        })
    }

    render() {
        const listarJobs = this.state.carrinho.map((job) => {
            if (job.id) {
                return (
                    <All.Items key={job.id}>
                        <h3>{job.title}</h3>

                        <div>
                            <p>{job.price.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</p>
                            <Button id={job.id} onClick={this.removerServico} variant="contained">Remover</Button>
                        </div>
                    </All.Items>
                )
            } else {
                return false
            }
        })

        return (

            <All.ContainerItem>
                <Button
                    onClick={this.props.BotaoVoltar}
                    variant="outlined"
                    color="primary">
                    Voltar
                </Button>

                {this.state.carrinho.length !== 0
                    ? (
                        <>
                            {listarJobs}


                            <All.Total>
                                <h3>Valor Total: <span>{this.totalCarrinho()}</span></h3>

                                <Button onClick={() => this.contratarServico(this.state.carrinho)} variant="contained">Contratar
                                    Serviço</Button>
                            </All.Total>
                        </>
                    )
                    : (
                        <All.CarrinhoVazio>
                            <h2>Seu carrinho está vazio!</h2>
                        </All.CarrinhoVazio>
                    )
                }
            </All.ContainerItem>
        )
    }
}
