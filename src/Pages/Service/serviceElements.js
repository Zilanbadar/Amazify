import styled from "styled-components";
import AboutBg from './Images/AboutBg.jpg'
import ContactBg from './Images/Contact.jpg'

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
    background: linear-gradient(rgb(48 48 48 / 35%), rgb(48 48 48 / 35%)),url(${AboutBg});
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

export const ServiceSection = styled.div  `
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    flex-direction: column;
`

export const ServiceHead = styled.h4 `
    color: #fff;
    font-family: corbel;
    font-size: 32px;
    margin: 0;
    height: 20vh;
    display: flex;
    align-items: center;
`

export const ServicePara = styled.p `
    color: #ff9900;
    font-family: corbel;
    font-size: 16px;
    margin: 0px;
    width: 60%;
    text-align: center;
    height: 7vh;
`

export const ServiceCont = styled.div `
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    row-gap: 30px;
    column-gap: 30px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    transform: all ease-in-out 0.3s;
`

export const ServiceOverlay = styled.div `
    width: 90%;
    height: 16vh;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    font-family: corbel;
`

export const ContHover = {
    background: 'rgb(68, 68, 68)',
    color: 'rgb(255, 255, 255)',
    transform: 'scale(1.1)',
    transition: 'all ease-in-out 0.3s',
}

export const ServiceItem = styled.div   `
    width: 25%;
    height: 26vh;
    background: #dadee3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const ServiceItemHead = styled.h5 `
    margin: 0;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 400;
`

export const ServiceIcon = styled.div `
    width: 70px;
    height: 70px;
    color: #262626;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const IconStyle = {
    width : "100%",
    height : "100%"
}

export const ContactSection = styled.div `
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 13px 3px #222222;
    background: linear-gradient(rgb(48 48 48 / 35%), rgb(48 48 48 / 35%)),url(${ContactBg});
    background-size: cover;

`

export const ContactCont = styled.div `
    width: 60%;
    height: 55vh;
    backdrop-filter: blur(10px);
    background: #b5b5b540;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContactHead = styled.h2 `
    color: #fff;
    font-family: corbel;
    font-size: 32px;
    margin: 0;
    height: 20vh;
    display: flex;
    align-items: center;
`

export const ContactPara = styled.p `
    width: 80%;
    height: 14vh;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    font-family: corbel;
`

export const ContactButton = styled.button `
    width: 125px;
    height: 6vh;
    background: #ff9900;
    border: none;
    color: #0c0811;
    font-size: 18px;
    font-weight: 500;
    font-family: corbel;
    transition : all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
        background: #424242;
        color: #ff9900;
        transition : all ease-in-out 0.3s;
    }
`
