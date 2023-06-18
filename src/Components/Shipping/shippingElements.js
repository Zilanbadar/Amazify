import styled from "styled-components";
import Shipping from './Images/Shipping.jpg'

export const Main = styled.div `
    width: 100%;
    height: auto;
    top: 0;
    position: absolute;
    z-index: 1;
    overflow-x: hidden;

`

export const HeroSection = styled.div `
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(48 48 48 / 35%), rgb(48 48 48 / 35%)),url(${Shipping});
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
`

export const TextCont = styled.div `
    width: 30%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    /* backdrop-filter: blur(2px); */
    margin-left: 12%;
`

export const TextHead = styled.h2 `

`

export const TextPara = styled.p `

`


export const ShippingSection = styled.div `
width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 50px;
`

export const ShippingHead = styled.h4 `
    width: 85%;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 20px;
    padding: 30px 0;
`

export const ShippingCont = styled.div `
width: 85%;
    height: fit-content;
    border: 2px solid rgb(255, 153, 0);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 15px 0;
    transition: all ease-in-out 0.3s;
`

export const ShippingSubCont = styled.div `
    width: 95%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 15px;
`

export const Cont = styled.div `
    display: flex;
    align-items: center;
    column-gap: 10px;
    flex-direction: row;
`

export const ShippingTitle = styled.h4 `
    width: 100%;
    height: 5vh;
    background: #f90;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: corbel;
`

export const ContLabel = styled.label `
    width: ${props => props.fluid ? "50%" : "120px"};
    color: ${props => props.type ? "#f90" : "#dadee3"};
    display: flex;
    align-items: center;
    column-gap: 10px;
`

export const ContInput = styled.input `
    width: ${props => props.sm ? "55px" : "auto"};
    border: 1px solid #f90;
    background: none;
    height: 3vh;
    color: #dadee3;
    transition: 0.3s all ease-in-out;
    accent-color: #f90;

    &:focus {
        transition: 0.3s all ease-in-out;
    }
`

export const CheckoutCont = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;
`

export const ContSelect = styled.select `
border: 1px solid #f90;
    background: none;
    height: 3vh;
    color: #dadee3;
    transition: 0.3s all ease-in-out;

    &:focus {
        transition: 0.3s all ease-in-out;
    }
`

export const ContOption = styled.option `
    background: #262626;
    cursor: pointer;

    /* &:hover, 
    &.is-selected {
        background: #f90 !important;
    } */
`

export const ShippingProceed = styled.div `
    width: 85%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const ProceedBtn = styled.button `
    width: 30%;
    height: 8vh;
    color: #fb9700;
    font-size: 20px;
    font-family: corbel;
    font-weight: 600;
    font-variant-caps: all-petite-caps;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fb9700;
    background: none;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    box-shadow: 0 0 10px 1px #f90;

    &:hover {
        background: #fb9700;
        color: #151515;
        font-size: 22px;
        transition: all ease-in-out 0.3s;
        box-shadow: inset 0 0 15px 1px #151515;
        border: none;
    }
`