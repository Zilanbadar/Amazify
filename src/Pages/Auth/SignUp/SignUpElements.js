import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Bg from '../Images/cover.jpg'

export const Main = styled.div `
    width : 100%;
    height : 100vh;
    display: flex;
    justify-content: center;
    align-items : center;
    background-image : linear-gradient(#2e262650, #2e262650),url(${Bg});
    background-size: cover;
`

export const FormCont = styled.div `
    width: 40%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: rgb(122 105 105 / 46%);
    border-radius: 20px;
    box-shadow: rgb(52 46 46) 0px 0px 20px 5px;
`

export const FormHead = styled.h3 `
    font-family: corbel;
    font-size: 32px;
    font-weight: 700;
    color: rgb(32 13 13);
    margin: 0px;
`

export const AuthIconsCont = styled.div `
    width: 35%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`

export const IconsCont = styled.div `
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 30px;
    font-size: 22px;
    background: rgb(255 255 255);
    color: rgb(205, 85, 18);
    box-shadow: rgb(239 219 219) 0px 0px 11px 2px;
    cursor : pointer;
    transition : 0.3s all ease-in-out;

    &:hover {
        width: 38px;
        height: 38px;
        transform: rotate(359deg);
        background-color: rgb(205, 85, 18);
        color: rgb(255, 255, 255);
        transition: 0.3s all ease-in-out;
    }
`

export const Head6 = styled.h6 `
    color: #d5d5d5;
    font-family: corbel;
    font-size: 14px;
    margin: 0;
`

export const InputsCont = styled.div `
    width: 50%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 12px;

`

export const Inputs = styled.input `
    width: 90%;
    height: 5vh;
    padding-left: 2%;
    border: none;
    border-radius: 4px;
    background: rgb(207 207 207 / 69%);
    color: #d7550d;
    font-size: 14px;
    font-family: corbel;
    font-weight: 600;
    transition: 0.3s all ease-in-out;
    box-shadow: rgb(72 63 63 / 72%) 1px 2px 4px 1px;

    &:focus{
        width: 95%;
        outline: none;
        transition : 0.3s all ease-in-out;
        box-shadow: rgb(205 85 18 / 55%) 1px 2px 4px 1px;
    }
`

export const FormSubmit = styled.button `
    width: 20%;
    height: 5vh;
    border-radius: 25px;
    border: 2px solid #cd5512;
    background: #cd5512;
    color: #fff;
    font-family: corbel;
    font-size: 19px;
    font-weight: 600;
    cursor : pointer;
    transition : 0.3s all ease-in-out;

    &:hover {
        width: 22%;
        background: #fff;
        color: #cd5512;
        transition : 0.3s all ease-in-out;
        border: none;
        box-shadow: 1px 3px 11px 0px #cd5512;
    }
`

export const SwitchP = styled(Link) `
    color: rgb(64 29 9);
    font-family: corbel;
    font-size: 14px;
    margin: 0px;
    text-decoration: none;
`