import styled from 'styled-components'

export const HomeStyles = {
ContainerHome: styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100vh;
    margin: auto;
    background-color: #25274D;    
`,

Header : styled.header`
    display: flex;
    color: white;
    align-items: center;
    background-color: #464866;
    height: 60px;
`,
LogoPeq : styled.img`
    height: 45px;
    margin-left: 15px;
    margin-right: 15px;
`,

ContainerLogoGrande : styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 30px;
`,

 LogoGrande : styled.img`
    height: 300px;
    width: 300px;        
`,

 ContainerBotoes : styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px 400px;
`
}


