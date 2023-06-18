import { NavLink as BaseNavlink } from 'react-router-dom'
import styled from 'styled-components'

export const Main = styled.div `
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: rgb(63 66 70 / 17%);
    position: fixed;
    backdrop-filter: blur(6px);
    top: 0;
    z-index: 110;
`

export const LogoCont = styled.div `
    width: 20%;
    height: 100%;
    display: flex;
    font-size: 32px;
    font-family: corbel;
    color: #fff;
    align-items: center;
    font-weight: 500;
`

export const NavUl = styled.ul `
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 30px;
    
`

export const NavLi = styled.li `
    display: flex;
    margin: 0px;
    color: #fff;
    font-family: corbel;
    font-size: 18px;

`

export const NavLinkLi = styled(BaseNavlink)`
    text-decoration: none;
    color: inherit;
    transition : all ease-in-out 0.3s;

    &:hover {
        color: #ff9900;
        transition : all ease-in-out 0.3s;
        transform : scale(1.2)
    }

    &.active {
        color: #ff9900;
        transition : all ease-in-out 0.3s;
        transform : scale(1.2)
    }
`