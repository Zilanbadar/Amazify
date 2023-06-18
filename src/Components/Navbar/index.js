import React from 'react'
import { 
    Main,
    LogoCont,
    NavUl,
    NavLi,
    NavLinkLi,
} from './navbarElements'

const Navbar = () => {
  return (
    <Main>
      <LogoCont>
        Amazify
      </LogoCont>
      <NavUl>
        <NavLi>
          <NavLinkLi to="/">
            Home
          </NavLinkLi>  

        </NavLi>
        <NavLi>
          <NavLinkLi to="/services">
            Services
          </NavLinkLi>  
        </NavLi>
        <NavLi>
          <NavLinkLi to="/products">
            Products
          </NavLinkLi>
        </NavLi>  
        <NavLi>
          <NavLinkLi to="/wishlist">
            Wishlist
          </NavLinkLi>   
        </NavLi>
        <NavLi>
          <NavLinkLi to="/contact">
            Contact
          </NavLinkLi>   
        </NavLi>
      </NavUl>
    </Main>
  )
}

export default Navbar





