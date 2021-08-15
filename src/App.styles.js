import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    color: white;
    align-items: center;
    background-color: #AAABB8;
    height: 60px;
    justify-content: space-between;
`
export const LogoPeq = styled.img`
    height: 45px;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
`
export const Carrinho = styled.div `

img{
    height: 40px;
    margin-right: 10px;
    position: relative;
    top: 8px;
    cursor: pointer;
}
`
export const QuantCarrinho = styled.div `
    color: red;
    font-size: 15px;
    position: absolute;
    top: 21px;
    right: 25px;
    cursor: pointer;
`