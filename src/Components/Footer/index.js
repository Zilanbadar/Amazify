import React from 'react'
import {
    Main,
    FooterTitle,
    FooterCont,
    FooterHead,
    FooterPara,
    FooterUl,
    FooterLi,
    FooterLink,
} from './footerElements'
import {BsInstagram, BsFacebook, BsTwitter,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <Main>
        <FooterTitle>
            Amazify
        </FooterTitle>
        <FooterCont>
            <FooterHead>
                About
            </FooterHead>
            <FooterPara>
                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. 
                Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate
                quam a quam volutpat, sed ullamcorper erat commodo.
            </FooterPara>
        </FooterCont>
        <FooterCont>
            <FooterHead>
                Useful Links
            </FooterHead>
            <FooterPara>
                <FooterUl>
                    <FooterLi>
                        <FooterLink to="/">
                            Home
                        </FooterLink>
                    </FooterLi>
                    <FooterLi>
                        <FooterLink to="/about">
                            About
                        </FooterLink>
                    </FooterLi>
                    <FooterLi>
                        <FooterLink to="/services">
                            Services
                        </FooterLink>
                    </FooterLi>
                    <FooterLi>
                        <FooterLink to="/products">
                            Products
                        </FooterLink>
                    </FooterLi>
                    <FooterLi>
                        <FooterLink to="/contact">
                            Contact us
                        </FooterLink>
                    </FooterLi>
                </FooterUl>
            </FooterPara>
        </FooterCont>
        <FooterCont>
            <FooterHead>
                Social Links
            </FooterHead>
            <FooterPara>
                <FooterUl>
                    <FooterLi>
                        <FooterLink to="/">
                            <BsInstagram/>@Amazify/instagram.com
                        </FooterLink>
                    </FooterLi>
                    <FooterLi>
                        <FooterLink to="/">
                            <BsFacebook/>@Amazify/facebook.com
                        </FooterLink>
                    </FooterLi>
                    <FooterLi>
                        <FooterLink to="/">
                            <BsTwitter/>@Amazify/twitter.com
                        </FooterLink>
                    </FooterLi>
                    <FooterLi>
                        <FooterLink to="/">
                            <BsLinkedin/>@Amazify/linkedin.com
                        </FooterLink>
                    </FooterLi>
                </FooterUl>
            </FooterPara>
        </FooterCont>
        <FooterCont>
            <FooterHead>
                Contact Us
            </FooterHead>
            <FooterPara>

            </FooterPara>
        </FooterCont>
      
    </Main>
  )
}

export default Footer
