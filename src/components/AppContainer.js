import React, { Component } from 'react'
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
        </div>
        {
          this.paginaSelecionada()
        }
      </div>
    )
  }
}
