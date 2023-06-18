import styled from "styled-components";
import ProductsBg from './Images/Products.jpg'
import { Link } from "react-router-dom";

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
    background: linear-gradient(rgb(48 48 48 / 48%), rgb(48 48 48 / 48%)),url(${ProductsBg});
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
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

export const ProductSection = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`

export const Sidebar = styled.div `
    width: 300px;
    height: 100vh;
    background-color: #767676;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const SearchCont = styled.div `
    width: 90%;
    height: 12vh;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Search = styled.input `
    width: 95%;
    padding: 0px 5px;
    height: 5vh;
    background: #c1c1c1;
    font-size: 16px;
    color: #262626;
    border: 2px solid #262626;
    border-radius: 3px;

    &:focus {
        outline: none;
        border: none;
    }
`

export const SidebarUl = styled.ul `
    list-style: none;
    display: flex;
    align-items: center;
    width: 90%;
    height: auto;
    padding: 0;
    flex-direction: column;
`

export const SidebarLi = styled.li `
    cursor: pointer;
    width: 100%;
    height: 6vh;

    &:active {
        color: aliceblue;
    }
`


export const ProductCont = styled.div `
    width: 100%;
    height: auto;
    background: rgb(38, 38, 38);
    display: flex;
    justify-content: center;
`

export const ProductList = styled.div `
    width: 94%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    column-gap: 26px;
    row-gap: 20px;
    justify-content: flex-start;
    padding-top: 60px;
`

export const ProductListCont = styled.div `
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

export const ProductNavigate = styled(Link) `
    font-size: 16px;
    color: #569fdf;
`
