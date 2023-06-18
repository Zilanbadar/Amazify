import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div `
    width: 100%;
    height: 50vh;
    background-color: rgb(100 100 100);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
`

export const FooterTitle = styled.div `
    width: 90%;
    height: 6vh;
    display: flex;
    font-size: 39px;
    font-family: corbel;
    color: rgb(255 153 0);
    -webkit-box-align: center;
    align-items: center;
    font-weight: 700;
    margin: 0px;
`

export const FooterCont = styled.div `
    width: 20%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 30px;
`

export const FooterHead = styled.h4 `
    font-size: 22px;
    font-family: corbel;
    letter-spacing: 2px;
    margin: 0;
    color: #14130f;
`

export const FooterPara = styled.p `
    font-size: 16px;
    font-family: corbel;
    color: #e1e1e1;
    margin: 0;
`

export const FooterUl = styled.ul `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 10px;
    margin: 0;
    padding: 0 20px;
`

export const FooterLi = styled.li `

`

export const FooterLink = styled(Link) `
    text-decoration: none;
    color: inherit;
    transition : all ease-in-out 0.3s;

    &:hover {
        color: #14130f;
        transition : all ease-in-out 0.3s;
        transform : scale(1.2)
    }
`
