import styled from 'styled-components'
import HeroBg from './Images/HeroBg.jpg'
import AboutBg from './Images/AboutBg.jpg'
import OfferImage from './Images/Offer.png'
import NewsLBg from './Images/NewsletterBg.jpg'

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
    background: linear-gradient(rgb(48 48 48 / 35%), rgb(48 48 48 / 35%)),url(${HeroBg});
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

export const SearchCont = styled.div `
    width : 340px;
    height : 6vh;
    display : flex;
    justify-content: center;
    align-items: center;
    left: 15px;
    border-radius: 8px;
    backdrop-filter: blur(5px) ;
    background: #63646436 ;
    box-shadow: rgb(233 143 8) 0px 0px 8px 2px;
`

export const Search = styled.input `
    width : 85%;
    padding: 0 5px;
    height: 95%;
    border: none;
    background: transparent;
    font-size: 16px;
    color: #ff9900;

    &:focus {
        outline: none;
        border: none;
    }

`

export const ProductSection = styled.div `
    width : 100%;
    height : auto;
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    flex-direction: column;
`

export const ProductHead = styled.h2 `
    color: #fff;
    font-family: corbel;
    font-size: 32px;
    margin: 0;
    height: 20vh;
    display: flex;
    align-items: center;
`

export const ProductCont = styled.div `
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 15px;
    justify-content: flex-start;
`

export const ExploreCont = styled.div `
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ExploreBtn = styled.button `
    width: 120px;
    height: 7vh;
    overflow: hidden;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff9900;
    font-size: 17px;
    font-weight: 500;
    background: #56595c;
    border: none;
    transition: all ease-in-out 0.3s;
    font-family: corbel;

    &:hover{
        transition: all ease-in-out 0.3s;
        font-size: 20px;
        color: #569fdf;
    }

    &:after {
        content: "";
        position:absolute;
        margin:-20px;
        width:32px;
        height:32px;
        transform:rotate(45deg);
        background-color:rgb(38 38 38);
        top: 0;
        left: 0;
    }
`

export const OfferCont = styled.div `
    width: 100%;
    height: 65vh;
    background-color: #0C0811;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;

`

export const OfferImgCont = styled.div `
    width : 40%;
    height: 80%;
    background: url(${OfferImage});
    background-size: cover;
    background-position: bottom;
`


export const OfferContentCont = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const OfferSpan = styled.span `
    color: #fff;
    font-family: corbel light;
    font-size: 22px;
    letter-spacing: 7px;
`

export const OfferHead = styled.h2 `
    margin : 0;
    font-size: 100px;
    height: 18vh;
    font-family: corbel;
    color: #fff;
`

export const OfferPara = styled.p `
    color: #fff;
    font-family: corbel;
    font-size: 19px;
    font-weight: 300;
    margin: 0;
    height: 15vh;
`

export const OfferBtn = styled.button `
    width: 125px;
    height: 6vh;
    background: #ff9900;
    border: none;
    color: #0c0811;
    font-size: 19px;
    font-weight: 700;
    font-family: corbel;
    transition : all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
        background: #424242;
        color: #ff9900;
        transition : all ease-in-out 0.3s;
    }
`

export const AboutSection = styled.div `
    width: 100%;
    height: 70vh;
        border-top: 10px solid;
    border-bottom: 14px solid;
    background: linear-gradient(rgb(70 70 70 / 35%), rgb(70 70 70 / 35%)),url(${AboutBg});

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
`

export const AboutContent = styled.div `
    width: 60%;
    height: 80%;
`

export const AboutHead = styled.h4 `
    font-size: 25px;
    font-family: corbel;
    letter-spacing: 2px;
    font-weight: 500;
`

export const AboutPara = styled.p `
    width: 60%;
    font-size: 19px;
    color: #dadee3;
    font-family: corbel;
    font-weight: 300;
`

export const AboutButton = styled.button `
    width: 138px;
    height: 6vh;
    background: rgb(38, 38, 38);
    border: none;
    color: rgb(255, 153, 0);
    font-size: 18px;
    font-weight: 700;
    font-family: corbel;
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &:hover {
        background: rgb(255, 153, 0);
        color: #0c0811;
        transition : all ease-in-out 0.3s;
    }

    
`

export const AboutImageCont = styled.div `
    width: 30%;
    height: 90%;
    background: url(${AboutBg});
`

export const AboutImg = styled.img `

`


export const NewsletterSection = styled.div `
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(${NewsLBg});
    background-size: cover;
    box-shadow: inset 0px 0px 18px 9px #000000;
`

export const NewsletterHead = styled.h2 `
    font-size: 58px;
    font-family: corbel;
    font-weight: 900;
    margin: 0;
`

export const NewsletterPara = styled.p `
    font-size: 23px;
    color: #dadee3;
    font-family: corbel light;
`

export const NewsletterInput = styled.input `
    width: 290px;
    height: 5vh;
    background: #7676763b;
    border: 1px solid #f90;
    backdrop-filter: blur(2px);
    padding: 0 10px;
    color: #dadee3;
    font-family: corbel;
    font-size: 16px;
    transition : 0.3s all ease-in-out;

    &:focus {
        outline: none;
        transition : 0.3s all ease-in-out;
    }
`

export const NewsletterBtnCont = styled.div `
    height: 20vh;
    display: flex;
    align-items: center;
`

export const NewsletterBtn = styled.button `
    width: 125px;
    height: 6vh;
    background: #fff;
    border: none;
    color: #0c0811;
    font-size: 19px;
    font-weight: 700;
    font-family: corbel;
    transition : all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
        background: rgb(255, 153, 0);
        color: #0c0811;
        transition : all ease-in-out 0.3s;
    }
`
