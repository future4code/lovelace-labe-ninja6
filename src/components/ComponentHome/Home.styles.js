import styled from 'styled-components'

export const HomeStyles = {
    ContainerHome: styled.div `
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100vh;
    margin: auto;
    background-color: #25274D;    
`,

    ContainerLogoGrande: styled.div `
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 30px;
`,

    LogoGrande: styled.img `
    height: 300px;
    width: 300px;        
`,

    ContainerBotoes: styled.div `
    display: flex;
    justify-content: space-evenly;
    margin: 10px 400px;

    Button {
        background-color: #29648A;
        color: white;
    }
    @media (min-width: 0px) {
        margin: 4px;
        Button{
            margin: 4px;
        }
      }
    @media (min-width: 768px) {
        margin: 7px
      }


`
}