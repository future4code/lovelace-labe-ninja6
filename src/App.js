import React from "react";
import * as HomeStyles from "./App.styles";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import Grid from "@material-ui/core/Grid";
//Componentes
import CardServico from "./components/CardServico";
import Carrinho from "./components/ComponentCarrinho/Carrinho";
import Contratar from "./components/Contratar";
import Home from "./components/ComponentHome/Home";
import QueroSerUmNinja from "./components/QueroSerUmNinja";

//Images
import logoHeader from "./img/logo_header.png";
import Axios from 'axios';


import axios from "axios";


class App extends React.Component {
    state = {
        paginaAtual: 'home',
        job: []
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
                />

            case 'contratar':
                return <Contratar
                    BotaoVoltar={() => this.setState({ paginaAtual: "home" })}
                    VerDetalhes={this.getJobById}
                    AddCarrinho={() => this.setState({ paginaAtual: "carrinho" })}
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

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HomeStyles.Header>
                    <HomeStyles.LogoPeq onClick={() => this.setState({ paginaAtual: "home" })} src={logoHeader} alt="Logo da LabeNinjas" />
                    <button onClick={() => this.setState({ paginaAtual: "carrinho" })}>Carrinho</button>
                </HomeStyles.Header>

                {this.paginaSelecionada("home")}
            </ThemeProvider>
        );
    }
}

export default App;
