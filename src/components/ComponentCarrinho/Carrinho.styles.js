import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  //border: 1px solid #000;
  margin: 0 auto;
  padding: 20px;
`

export const Items = styled.div`
  //border: 1px solid #000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #AAABB8;
  color: #2E9CCA;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    //border: 1px solid #000;
    width: 30%;

    Button {
      border: 2px solid #2E9CCA;
      color: #2E9CCA;
      font-weight: 700;
      border-radius: 5px;
    }
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  //border: 1px solid #000;
  
  h3{
     color: #2E9CCA;
    font-weight: 400;
    
    span{
      font-weight: 700;
    }
  }
  
  Button {
    background: #29648A;
    color: #AAABB8;
    font-weight: 700;
    border-radius: 5px;
    
    :hover{
      background: #29648A;
      color: #AAABB8;
    }
  }
`