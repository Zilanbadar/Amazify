import React, { useState } from 'react'
import { 
  Main,
  HeroSection,
  TextCont,
  TextHead,
  TextPara,
  SearchCont,
  Search,
  ProductSection,
  ProductHead,
  ProductCont,
  ExploreCont,
  ExploreBtn,
  OfferCont,
  OfferImgCont,
  OfferContentCont,
  OfferSpan,
  OfferHead,
  OfferPara,
  OfferBtn,
  AboutSection,
  AboutContent,
  AboutHead,
  AboutPara,
  AboutButton,
  AboutImageCont,
  AboutImg,
  NewsletterSection,
  NewsletterHead,
  NewsletterPara,
  NewsletterInput,
  NewsletterBtnCont,
  NewsletterBtn,
} from './homeElements'
import {FiSearch} from 'react-icons/fi'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import ProductItem from '../../Components/Products/ProductItem'
import Footer from '../../Components/Footer'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [inputFocus, setInputFocus] = useState(false)

    const navigate = useNavigate()

  return (
    <Main>
      <HeroSection>
        <TextCont>
            <TextHead>
                EXPLORE THE STORE ON YOU FINGER TIPS
            </TextHead>
            <TextPara>
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Sapiente velit ipsa consequuntur 
                cupiditate distinctio deserunt culpa sequi maiores 
                aliquid, officia nemo magni eligendi dolorum sint 
                aperiam quaerat cum facere? Dolorum!
            </TextPara>
            <SearchCont style={inputFocus ? {flexDirection : 'row-reverse', transition:"0.3s all ease-in-out"} : {flexDirection : 'row'}}>
                <FiSearch style={{fontSize : "16px", color : "#dadee3"}}/>
                <Search type='text' placeholder='Search...' onFocusCapture={()=>setInputFocus(true)}/>
            </SearchCont>
        </TextCont>
      </HeroSection>
      <ProductSection>
        <ProductHead>Featured Products</ProductHead>
        <ProductCont>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </ProductCont>
        <ExploreCont>
            <ExploreBtn onClick={()=>navigate("/products")}>Exlore More</ExploreBtn>
        </ExploreCont>
      </ProductSection>
      <OfferCont>
        <OfferImgCont>
        </OfferImgCont>
        <OfferContentCont>
          <OfferSpan>Special </OfferSpan>
          <OfferHead>OFFER SALE</OfferHead>
          <OfferPara>Get upto 25% Discount when you buy more than 2 products</OfferPara>
          <OfferBtn>Get access</OfferBtn>

        </OfferContentCont>
      </OfferCont>
      
      <ProductSection>
        <ProductHead>Latest Products</ProductHead>
        <ProductCont>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </ProductCont>
        <ExploreCont>
            <ExploreBtn onClick={()=>navigate("/products")}>Exlore More</ExploreBtn>
        </ExploreCont>
      </ProductSection>
      <AboutSection>
        <AboutContent>
          <AboutHead>
            WHO ARE WE?
          </AboutHead>
          <AboutPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae, fugiat veniam corrupti odit quas voluptatum 
            mollitia officia similique nobis praesentium, iusto ipsa 
            delectus architecto iste et dolores facere, pariatur molestias?
          </AboutPara>
          <AboutButton onClick={()=>navigate("/services")}>
            Read More <BsArrowRightCircleFill/>
          </AboutButton>
        </AboutContent>
        {/* <AboutImageCont>
          <AboutImg/>
        </AboutImageCont> */}
      </AboutSection>
      <NewsletterSection>
        <NewsletterHead>
          Subscribe to our Newsletter
        </NewsletterHead>
        <NewsletterPara>
          Get updated with tips on how to treat your pets 
          right and latest products suitable for your pets
        </NewsletterPara>
        <NewsletterInput type='text'/>
        <NewsletterBtnCont>
        <NewsletterBtn>Subscribe</NewsletterBtn>
        </NewsletterBtnCont>
      </NewsletterSection>
      <Footer/>
    </Main>
  )
}

export default Home
