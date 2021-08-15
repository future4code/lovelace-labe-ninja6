import styled from "styled-components";

export const ContainerItem = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  //border: 1px solid #000;
  margin: 20px auto;
  padding: 20px;

  button {
    background: #AAABB8;
    color: #29648A;
    font-weight: 700;
    border-radius: 5px;
    margin: 20px 0;

    :hover {
      background: #29648A;
      color: #AAABB8;
    }
  }
`

export const Items = styled.div `
  //border: 1px solid #000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #AAABB8;
  color: #2E9CCA;
  margin: 10px auto;
  border-radius: 5px;
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: 1px solid #000;
    width: 35%;
    
    p {
      font-weight: 600;
    }
    Button {
      border: 2px solid #2E9CCA;
      color: #2E9CCA;
      font-weight: 700;
      border-radius: 5px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    div{
    display: flex;
    flex-direction: column;
    }
  }
`

export const Total = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  //border: 1px solid #000;

  h3 {
    color: #2E9CCA;
    font-weight: 400;
    
    span {
      font-weight: 700;
    }
  }

  Button {
    background: #29648A;
    color: #AAABB8;
    font-weight: 700;
    border-radius: 5px;
    margin: 10px;
    :hover {
      background: #29648A;
      color: #AAABB8;
    }
  }
`

export const CarrinhoVazio = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  
  h2{
    color: #2E9CCA;
    font-weight: 700;
    font-size: 30px;
    margin: 20px auto;
  }
`