import React, { useState } from 'react'
import {
    Main,
    HeroSection,
    TextCont,
    TextHead,
    TextPara,
    WishlistSection,
    WishlistHead,
    WishlistCont,
    ProductSection,
    ProductCont,
    ImgCont,
    ProductImg,
    ProductTitle,
    ProductDetails,
    ProductPrice,
    ProductNavigate,
    OrderSection,
    ProductPara,
    Cont,
    ItemRemove,
} from './wishlistElements'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom'
import Pencil from './Images/pencil.jpg'
import {MdDeleteSweep} from 'react-icons/md'

const Wishlist = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/products')
    }
    return (
        <Main>
            <HeroSection>
                <TextCont>
                    <TextHead>
                        ``WE CARE ABOUT YOUR FAVOURITE ITEMS``
                    </TextHead>
                    <TextPara>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Sapiente velit ipsa consequuntur
                        cupiditate distinctio deserunt culpa sequi maiores
                        aliquid, officia nemo magni eligendi dolorum sint
                        aperiam quaerat cum facere? Dolorum!
                    </TextPara>
                </TextCont>
            </HeroSection>
            <WishlistSection>
                <WishlistHead>Favourite Items </WishlistHead>
                <WishlistCont>
                    <ProductSection>
                        <ProductCont>
                                <ImgCont>
                                    <ProductImg onClick={handleNavigate} src={Pencil} />
                                </ImgCont>
                                <Cont>

                                <ProductTitle>
                                    Ticonderoga Wood case Pencil
                                    <ItemRemove>
                                        <MdDeleteSweep/>
                                    </ItemRemove>
                                </ProductTitle>
                                <ProductPara>The World's Best Pencil (Premium wood–100%) 
                                    American Cedar Satin smooth finish Exclusive graphite 
                                    core formula Latex-free eraser
                                </ProductPara>
                                <ProductDetails>
                                    <ProductPrice>$23.00</ProductPrice>
                                    <ProductNavigate onClick={() =>handleNavigate()}>Continue Shipping</ProductNavigate>
                                </ProductDetails>
                                </Cont>
                        </ProductCont>
                    </ProductSection>
                    <OrderSection>

                    </OrderSection>
                </WishlistCont>
            </WishlistSection>
            <Footer />
        </Main>
    )
}

export default Wishlist
