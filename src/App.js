import React from "react";
import * as HomeStyles from "./App.styles";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
//Componentes
import CardServico from "./components/CardServico";
import Carrinho from "./components/ComponentCarrinho/Carrinho";
import Contratar from "./components/Contratar";
import Home from "./components/ComponentHome/Home";
import QueroSerUmNinja from "./components/QueroSerUmNinja";

//Images
import logoHeader from "./img/logo_header.png";
import logoCarrinho from "./img/Carrinho.png"


import axios from "axios";


class App extends React.Component {
    state = {
        paginaAtual: 'home',
        job: [],
        quantCarrinho: 0
    }

    componentDidMount(){
        this.pegarQuantCarrinho()
    }

    getJobById = async (jobId) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${jobId}`
        const headers = {
            headers: {
                Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
            },
        };

        try {
            const response = await axios.get(url, headers)

            this.setState({
                paginaAtual: 'verdetalhes',
                job: [response.data]
            })
        } catch (e) {
            alert(e.response.data.message)
        }
    }


    paginaSelecionada = () => {
        switch (this.state.paginaAtual) {
            case 'home':
                return <Home
                    onClickQueroSerNinja={() => this.setState({ paginaAtual: "queroserumninja" })}
                    onClickContratarNinjas={() => this.setState({ paginaAtual: "contratar" })}
                />

            case 'queroserumninja':
                return <QueroSerUmNinja
                    BotaoVoltar={() => this.setState({ paginaAtual: "home" })}
                />

            case 'carrinho':
                return <Carrinho
                    BotaoVoltar={() => this.setState({ paginaAtual: "contratar" })}
                    DelQtdCarrinho={this.delQtdCarrinho}
                />

            case 'contratar':
                return <Contratar
                    BotaoVoltar={() => this.setState({ paginaAtual: "home" })}
                    VerDetalhes={this.getJobById}
                    AddCarrinho={() => this.setState({ paginaAtual: "carrinho" })}
                    AddQtdCarrinho={this.addQtdCarrinho}
                />

            case 'verdetalhes':
                return <CardServico
                    BotaoVoltar={() => this.setState({ paginaAtual: "contratar" })}
                    Job={this.state.job}
                />

            default:
                return <Home
                    onClickQueroSerNinja={() => this.setState({ paginaAtual: "queroserumninja" })}
                    onClickContratarNinjas={() => this.setState({ paginaAtual: "contratar" })}
                />
    }
    }

    addQtdCarrinho = () => {
        this.setState({quantCarrinho: this.state.quantCarrinho + 1})
    }

    delQtdCarrinho = () => {
        this.setState({quantCarrinho: this.state.quantCarrinho - 1})
    }

    pegarQuantCarrinho = () => {
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

                this.setState({quantCarrinho: jobsSelecionados.length});

            })
            .catch((erro) => {
                alert(erro.response.data.error);
            });
    };

    render() {
        const viewCarrinho = () => {
            return (
                    <HomeStyles.Carrinho onClick={() => this.setState({ paginaAtual: "carrinho" })}>
                        <img src={logoCarrinho} alt='Carrinho' />
            
                        <HomeStyles.QuantCarrinho>
                        {this.state.quantCarrinho}
                            
                        </HomeStyles.QuantCarrinho>
                    </HomeStyles.Carrinho>
            )

        }

        return (
            <ThemeProvider theme={theme}>
                <HomeStyles.Header>
                    <HomeStyles.LogoPeq onClick={() => this.setState({ paginaAtual: "home" })} src={logoHeader} alt="Logo da LabeNinjas" />
                    {this.state.quantCarrinho ?     
                        viewCarrinho() : ''
                    }
                </HomeStyles.Header>

                {this.paginaSelecionada("home")}
            </ThemeProvider>
        );
    }
}

export default App;
