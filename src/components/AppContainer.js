<<<<<<< HEAD
import React, {Component} from 'react'
=======
import React, { Component } from 'react'
import Styled from 'styled-components'

>>>>>>> master
import CardServico from './CardServico'
import Carrinho from './Carrinho/Carrinho'
import Contratar from './Contratar'
import Detalhes from './Detalhes'
import Home from './Home'
import QueroSerUmNinja from './QueroSerUmNinja'

const StyledAppContainer = Styled.div`
  width: 100%;
`
const StyledHeader = Styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: gray;
`
const StyledMain = Styled.main`
  width: 100%;
`

export class AppContainer extends Component {

    state = {
        paginaAtual: 'home'
    }

    paginaSelecionada = () => {
        switch (this.state.paginaAtual) {
            case 'home':
                return <Home/>

            case 'queroserumninja':
                return <QueroSerUmNinja/>

            case 'detalhes':
                return <Detalhes/>

            case 'carrinho':
                return <Carrinho/>

<<<<<<< HEAD
            case 'contratar':
                return <Contratar/>

            case 'cardGustavoServico':
                return <CardServico/>

            default:
                return <p>Erro</p>
        }
    }

    render() {
        return (
            <div>
                <p>Pronto para começar!</p>
                <div>
                    <button onClick={() => {
                        this.setState({paginaAtual: 'home'})
                    }}>Home
                    </button>
                    <button onClick={() => {
                        this.setState({paginaAtual: 'queroserumninja'})
                    }}>Quero ser um ninja
                    </button>
                    <button onClick={() => {
                        this.setState({paginaAtual: 'detalhes'})
                    }}>Detalhes
                    </button>
                    <button onClick={() => {
                        this.setState({paginaAtual: 'carrinho'})
                    }}>Carrinho
                    </button>
                    <button onClick={() => {
                        this.setState({paginaAtual: 'contratar'})
                    }}>Contratar
                    </button>
                    <button onClick={() => {
                        this.setState({paginaAtual: 'cardGustavoServico'})
                    }}>cardGustavoServico
                    </button>

                </div>
                {
                    this.paginaSelecionada()
                }
            </div>
        )
    }
=======
      case 'cardGustavoServico':
        return <CardServico />
  
      default:
        return <p>Erro</p>
    }
  }

  render() {
    return (
      <StyledAppContainer>
        <StyledHeader>          
          <p>Esse header é só um teste!!!</p>
          <div>
            <button onClick={() => { this.setState({ paginaAtual: 'home' }) }}>Home</button>
            <button onClick={() => { this.setState({ paginaAtual: 'queroserumninja' }) }}>Quero ser um ninja</button>
            <button onClick={() => { this.setState({ paginaAtual: 'detalhes' }) }}>Detalhes</button>
            <button onClick={() => { this.setState({ paginaAtual: 'carrinho' }) }}>Carrinho</button>
            <button onClick={() => { this.setState({ paginaAtual: 'contratar' }) }}>Contratar</button>
            <button onClick={() => { this.setState({ paginaAtual: 'cardGustavoServico' }) }}>cardGustavoServico</button>

          </div>
        </StyledHeader>
        <StyledMain>
          {
            this.paginaSelecionada()
          }
        </StyledMain>
      </StyledAppContainer>
    )
  }
>>>>>>> master
}
