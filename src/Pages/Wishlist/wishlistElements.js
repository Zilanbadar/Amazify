import styled from "styled-components";
import WishlistBg from './Images/WishlistBg.jpg'
import { Link } from "react-router-dom";

export const Main = styled.div`
    width: 100%;
    height: auto;
    top: 0;
    position: absolute;
    z-index: 1;
    overflow-x: hidden;

`

export const HeroSection = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(48 48 48 / 35%), rgb(48 48 48 / 35%)),url(${WishlistBg});
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
`

export const TextCont = styled.div`
    width: 30%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    /* backdrop-filter: blur(2px); */
    margin-left: 12%;
`

export const TextHead = styled.h2`

`

export const TextPara = styled.p`

`


export const WishlistSection = styled.div`
    width: 100%;
    height: auto;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const WishlistHead = styled.h4`
margin: 0;
width: 85%;
    height: 15vh;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-family: corbel;
    font-weight: 500;
    color: #fff;
`

export const WishlistCont = styled.div`
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const ProductSection = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const ProductCont = styled.div`
width: 90%;
    height: 20vh;
    display: flex;
    background-color: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(16px);
    box-shadow: rgba(0, 0, 0, 0.36) 13px 20px 23px 3px;
    border: 1.5px solid rgba(255, 255, 255, 0.06);
    flex-flow: row wrap;
    align-items: center;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
`

export const ImgCont = styled.div`
    width: 125px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductImg = styled.img`
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

export const Cont = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ProductTitle = styled.div`
width: 100%;
    height: 6vh;
    display: flex;
    justify-content: space-between;
    color: rgb(211, 211, 211);
    font-size: 18px;
    font-weight: 500;
    align-items: flex-start;
`

export const ItemRemove = styled.div`
    width: 30px;
    height: 30px;
    color: rgb(38 38 38);
    display: flex;
    align-items: flex-start ;
    justify-content: center;
    font-size: 28px;
    cursor: pointer;
    transition: all ease-in-out 0.3s;

    &:hover {
        transition: all ease-in-out 0.3s;
        color: #f90;
        font-size: 30px;
    }
`

export const ProductPara = styled.p`
    width: 70%;
    margin: 0px;
    font-size: 12px;
    font-family: corbel;
    font-weight: 600;
`

export const ProductDetails = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ProductPrice = styled.p`
    width: auto;
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #ff9900;
`

export const ProductNavigate = styled.button`
    padding: 5px 10px;
    font-size: 16px;
    color: rgb(86, 159, 223);
    cursor: pointer; 
    transition : all ease-in-out 0.3s;
    border: none;

    &:hover {
    transition : all ease-in-out 0.3s;   
    background: rgb(38 38 38);
    letter-spacing: 1px;
    }
`


export const OrderSection = styled.div`
width: 30%;
    height: 70vh;
    background: aliceblue;
    box-shadow: 5px 5px 12px 0px #4f4b4b;
    border-radius: 5px;
`