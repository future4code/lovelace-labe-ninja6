import React from 'react'
import * as HomeStyles from "./App.styles"
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./theme";

//Componentes
// import { AppContainer } from './components/AppContainer'
import CardServico from './components/CardServico'
import Carrinho from './components/ComponentCarrinho/Carrinho'
import Contratar from './components/Contratar'
import Detalhes from './components/Detalhes'
import Home from './components/ComponentHome/Home'
import QueroSerUmNinja from './components/QueroSerUmNinja'

//Images
import logoNinjas from "./img/logo-peq.jpg";

class App extends React.Component{
	state = {

	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<HomeStyles.Header>

					<HomeStyles.LogoPeq src={logoNinjas} alt="Logo da LabeNinjas"/>
					<h2>LabeNinjas</h2>

				</HomeStyles.Header>

				<Home />



				{/*<AppContainer />*/}

			</ThemeProvider>
		)
	}
}

export default App
