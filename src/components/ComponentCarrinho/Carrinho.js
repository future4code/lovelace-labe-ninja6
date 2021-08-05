import React from 'react'
import * as All from "./Carrinho.styles"
import {Button} from "@material-ui/core";
import axios from 'axios';




export default class Carrinho extends React.Component {
    state = {
        carrinho: []
    }
    componentDidMount(){
        this.pegarListaCarrinho()
    }
    pegarListaCarrinho = () => {
        const url = "https://labeninjas.herokuapp.com/jobs";
        const headers = {
                headers: {
                    Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
                },
        };
        axios
      .get(url, headers)
      .then((resp) => {
        
        
        const jobsSelecionados = resp.data.jobs.filter((job) => {
            return job.taken === true
        })
        this.setState({ carrinho:  jobsSelecionados});
        
      })
      .catch((erro) => {
        alert(erro);
      });
    };
    removerServico = async (event) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${event.currentTarget.id}`;
        const headers = {
            headers: {
                    Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
                },
            };
        const body = {
                taken: false
            };
        try {
            const rem = await axios.post(url, body, headers)
            await this.pegarListaCarrinho()
            alert('Serviço removido com sucesso!')
        } catch (erro) {
            alert(erro.response.data.error)
        }
    }

    render() {

        const totalCarrinho = () => {
            let valorTotal = 0
            for(let job of this.state.carrinho) {
                valorTotal += job.price
            }
            return valorTotal
        }
        const listarJobs = this.state.carrinho.map((job) => {
            return (
                <ul>
                    <li>
                        <h3>{job.title}</h3>
                        <div>
                            <p>R$ {job.price}</p>
                            <Button id={job.id} onClick={this.removerServico} variant="contained">Remover</Button>
                        </div>
                    </li>
                </ul>
            )
        })
        return (

            <All.ContainerItem>
                <Button
                    onClick={this.props.BotaoVoltar}
                    variant="outlined"
                    color="primary">
                    Voltar
                </Button>

                <All.Items>
                    {listarJobs}
                </All.Items>

                <All.Total>
                    <h3>Valor Total: <span>R$ {totalCarrinho()}</span></h3>

                    <Button onClick='' variant="contained">Contratar Serviço</Button>
                </All.Total>
            </All.ContainerItem>
        )
    }
}