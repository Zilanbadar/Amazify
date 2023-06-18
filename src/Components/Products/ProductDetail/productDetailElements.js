import styled from "styled-components";

export const Main = styled.div `
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.46);
    position: absolute;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`


export const DetailClose = styled.div `
    width: 90%;
    height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`



export const Close = styled.div `
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: rgb(255, 153, 0);
    box-shadow: 0 0 5px 1px #f90;
    border-radius: 50px;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.1);
        transition: all ease-in-out 0.3s;

    }
`

export const CloseStyle = {
    width : "100%",
    height : "100%"
}

export const DetailSection = styled.div `
    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const DetailImageCont = styled.div `
    width: 400px;
    height: 440px;
    display: flex;
    justify-content: flex-end;    
`

export const DetailImage = styled.img `
    width: 100%;
    height: 100%;
`

export const FuncCont = styled.div `
    position: absolute;
    width: 60px;
    height: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #ff9900;
    row-gap: 8px;
`

export const IconHover = {
    cursor : "pointer",
    transform : "scale(1.1)",
    transition : "0.3s all ease-in-out"
}

export const DetailCont = styled.div `
    width: 60%;
    height: 85%;
`

export const DetailHead = styled.div `
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(255, 153, 0);
    font-size: 25px;
    font-weight: 500;
`

export const DetailBreadcrumb = styled.div `
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    font-variant: all-petite-caps;
    column-gap: 12px;
`

export const BreadcrumbItem = styled.div `
    color : #dadee3;
    cursor: pointer;
`

export const DetailPara = styled.p `
    color: #dadee3;
    font-size: 20px;
`

export const DetailUl = styled.ul `
    padding: 0;
    margin: 0;
    width: fit-content;
    height: 8vh;
    list-style: none;
    border: 1px solid #ff9900;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ff9900;
    column-gap: 1px;
    justify-content: flex-start;
`

export const DetailLi = styled.li `
    height: 100%;
    background: #151515;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 18px;
    color: #dadee3;
    column-gap: 5px;
    cursor: pointer;
`

export const Cont = styled.div `
    display: flex;
    align-items: center;
    column-gap: 22px;
`

export const Input = styled.input `
width: ${props => props.sm ? "55px" : "auto"};
    border: 1px solid #f90;
    background: none;
    height: 8vh;
    color: #dadee3;
    transition: 0.3s all ease-in-out;
    accent-color: #f90;
    font-size: 15px;

    &:focus {
        transition: 0.3s all ease-in-out;
    }
`


export const PricingCont = styled.div `
    width: 100%;
    height: 18vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Price = styled.div `
    font-size: 50px;
    font-family: fantasy;
    color: #767676;
`


export const ContinueButton = styled.button `
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