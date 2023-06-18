import styled from "styled-components";

import Contact from './Images/Contact.jpg'

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
    background: linear-gradient(rgb(48 48 48 / 35%), rgb(48 48 48 / 35%)),url(${Contact});
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


export const ContactSection = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContactHead = styled.div `
    width: 80%;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContactItems = styled.div `
width: 30%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`

export const ContactItemHead = styled.h4 `
    color: rgb(189 189 189);
    font-size: 18px;
    font-family: monospace;
    font-weight: bold;
`

export const ContactForm = styled.div `
width: 80%;
    height: 60vh;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ff9900;
    box-shadow: 0 0 10px 1px #ff9900;
    justify-content: space-evenly;
`

export const ContactInputs = styled.div `
    width: 45%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

`


export const Cont = styled.div `
width: 100%;
height: auto;
`

export const InputHead = styled.h3 `
    font-size: 18px;
    font-family: corbel;
    color: #bdbdbd;
    margin: 0 0 12px 0;
    width: 100%;
`

export const InputField = styled.input `
    width: 90%;
    height: 5vh;
    border: 1px solid rgb(255, 153, 0);
    background: none;
    padding: 2px 10px;
    transition: all 0.3s ease-in-out 0s;
    color: #bdbdbd;
    font-family: corbel;
    font-size: 16px;

    &:focus {
        outline: none;
        box-shadow: 0 0 10px 1px #ff9900;   
        transition : all ease-in-out 0.3s;
    }
`

export const InputArea = styled.textarea `
    width: 90%;
    border: 1px solid rgb(255, 153, 0);
    background: none;
    padding: 2px 10px;
    transition: all 0.3s ease-in-out 0s;
    color: #bdbdbd;
    font-family: corbel;
    font-size: 16px;

    &:focus {
        outline: none;
    box-shadow: 0 0 10px 1px #ff9900;   
    transition : all ease-in-out 0.3s;
    }
`

export const FormSubmit = styled.button `
    width: 20%;
    min-width: fit-content;
    height: 6vh;
    border: none;
    background: #f90;
    color: #262626;
    font-size: 18px;
    font-family: corbel;
    font-weight: 600;
    transition : all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
    transition: all 0.3s ease-in-out 0s;
    background: none;
    border: 1px solid #f90;
    color: #f90;
    box-shadow: 0 0 5px 1px #f90;
    font-size: 20px;
    }
`


export const ContactMap = styled.div `
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 15px 3px #514d4d;
`
