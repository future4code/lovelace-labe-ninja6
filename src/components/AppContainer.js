import React, { Component } from 'react'
import CardServico from './CardServico'
import Carrinho from './Carrinho'
import Contratar from './Contratar'
import Detalhes from './Detalhes'
import Home from './Home'
import QueroSerUmNinja from './QueroSerUmNinja'

export class AppContainer extends Component {

  state = {
    paginaAtual: 'home'
  }

  paginaSelecionada = () => {
    switch (this.state.paginaAtual) {
      case 'home':
        return <Home />
    
      case 'queroserumninja':
        return <QueroSerUmNinja />

      case 'detalhes':
        return <Detalhes />

      case 'carrinho':
        return <Carrinho />

      case 'contratar':
        return <Contratar />

      case 'cardGustavoServico':
        return <CardServico />
  
      default:
        return <p>Erro</p>
    }
  }

  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        <div>
          <button onClick={() => { this.setState({ paginaAtual: 'home' }) }}>Home</button>
          <button onClick={() => { this.setState({ paginaAtual: 'queroserumninja' }) }}>Quero ser um ninja</button>
          <button onClick={() => { this.setState({ paginaAtual: 'detalhes' }) }}>Detalhes</button>
          <button onClick={() => { this.setState({ paginaAtual: 'carrinho' }) }}>Carrinho</button>
          <button onClick={() => { this.setState({ paginaAtual: 'contratar' }) }}>Contratar</button>
          <button onClick={() => { this.setState({ paginaAtual: 'cardGustavoServico' }) }}>cardGustavoServico</button>

        </div>
        {
          this.paginaSelecionada()
        }
      </div>
    )
  }
}
