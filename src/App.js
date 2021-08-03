import React from 'react'
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./theme";

//Componentes
import { AppContainer } from './components/AppContainer'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppContainer />

		</ThemeProvider>
	)
}

export default App
