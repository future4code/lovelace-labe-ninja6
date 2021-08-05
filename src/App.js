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

class App extends React.Component {
  state = {
    paginaAtual: "home",
  };

  paginaSelecionada = () => {
    switch (this.state.paginaAtual) {
      case "home":
        return (
          <Home
            onClickQueroSerNinja={() =>
              this.setState({ paginaAtual: "queroserumninja" })
            }
            onClickContratarNinjas={() =>
              this.setState({ paginaAtual: "contratar" })
            }
          />
        );

      case "queroserumninja":
        return (
          <QueroSerUmNinja
            BotaoVoltar={() => this.setState({ paginaAtual: "home" })}
          />
        );

      case "carrinho":
        return (
          <Carrinho
            BotaoVoltar={() => this.setState({ paginaAtual: "contratar" })}
          />
        );

      case "contratar":
        return (
          <Contratar
            BotaoVoltar={() => this.setState({ paginaAtual: "home" })}
            VerDetalhes={() => this.setState({ paginaAtual: "verdetalhes" })}
            AddCarrinho={() => this.setState({ paginaAtual: "carrinho" })}
          />
        );

      case "verdetalhes":
        return (
          <CardServico
            BotaoVoltar={() => this.setState({ paginaAtual: "contratar" })}
          />
        );

      default:
        return <p>Erro</p>;
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <HomeStyles.Header>
          <HomeStyles.LogoPeq
            onClick={() => this.setState({ paginaAtual: "home" })}
            src={logoHeader}
            alt="Logo da LabeNinjas"
          />
        </HomeStyles.Header>

        {this.paginaSelecionada("home")}
      </ThemeProvider>
    );
  }
}

export default App;
