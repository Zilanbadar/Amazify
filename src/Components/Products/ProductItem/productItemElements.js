import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div `
    width: 240px;
    height: 44vh;
    display: flex;
    background-color: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(16px);
    box-shadow: rgba(0, 0, 0, 0.36) 13px 20px 23px 3px;
    border: 1.5px solid rgba(255, 255, 255, 0.06);
    flex-direction: column;
    align-items: center;
`  

export const ImgCont = styled.div `
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductImg = styled.img `
    width: 90%;
    height: 90%;
    transition : all ease-in-out 0.3s;
    cursor: pointer;

    &:hover{
        width: 100%;
        height: 100%;
        transition : all ease-in-out 0.3s;
    }
`

export const ProductTitle = styled.div `
    width: 90%;
    height: 9vh;
    display: flex;
    justify-content: flex-start;
    color: #d3d3d3;
    font-size: 18px;
    font-weight: 500;
`

export const ProductDetails = styled.div `
    width: 90%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ProductPrice = styled.p `
    width: auto;
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #ff9900;
`

export const ProductNavigate = styled(LinkR) `
    font-size: 16px;
    color: #569fdf;
`
