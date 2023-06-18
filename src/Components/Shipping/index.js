import React from 'react'
import {
    Main,
    HeroSection,
    ShippingHead,
    ShippingSection,
    TextCont,
    TextHead,
    TextPara,
    ShippingCont,
    ShippingSubCont,
    ShippingTitle,
    Cont,
    ContLabel,
    ContInput,
    CheckoutCont,
    ContSelect,
    ContOption,
    ShippingProceed,
    ProceedBtn
} from './shippingElements'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Shipping = () => {

    const [paymentType, setPaymentType] = useState()
    const [cardType, setCardType] = useState()
    const locate = useLocation()

    console.log(paymentType)
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
            <ShippingSection>
                <ShippingHead>Shipping, Billing & Payment</ShippingHead>
                <ShippingCont>
                    <ShippingSubCont>
                        <ShippingTitle>Contact Information:</ShippingTitle>
                        <Cont>
                            <ContLabel>Email :</ContLabel>
                            <ContInput placeholder='Enter a valid Email' />
                        </Cont>
                    </ShippingSubCont>
                    <ShippingSubCont>
                        <ShippingTitle>Shipping Information:</ShippingTitle>
                        <Cont>
                            <ContLabel>Full Name :</ContLabel>
                            <ContInput placeholder='First Name' />
                            <ContInput placeholder='Last Name' />
                        </Cont>
                        <Cont>
                            <ContLabel>Phone Number :</ContLabel>
                            <ContInput placeholder='Enter a valid Phone ' />
                        </Cont>
                        <Cont>
                            <ContLabel>Address :</ContLabel>
                            <ContInput placeholder='Address 01' />
                            <ContInput placeholder='Address 02' />
                        </Cont>
                        <Cont>
                            <ContLabel>City :</ContLabel>
                            <ContInput placeholder='Enter your City name' />
                        </Cont>
                        <Cont>
                            <ContLabel>State / Zip :</ContLabel>
                            <ContInput placeholder='Enter your State' />
                            <ContInput placeholder='Enter ZipCode' />
                        </Cont>
                    </ShippingSubCont>
                    <ShippingSubCont>
                        <ShippingTitle>Payment Information:</ShippingTitle>
                        <Cont>
                            <ContLabel>Payment Type :</ContLabel>

                            <Cont>
                                <ContLabel type="subLabel">Credit Card :<ContInput type='radio' name='method' id='credit card' onClick={(e) => setPaymentType(e.target.id)} /></ContLabel>
                                |
                            </Cont>
                            <Cont>
                                <ContLabel type="subLabel">Wallet :<ContInput type='radio' name='method' id='wallet' onClick={(e) => setPaymentType(e.target.id)} /></ContLabel>
                                |
                            </Cont>
                            <Cont>
                                <ContLabel type="subLabel">Cash on delivery :<ContInput type='radio' name='method' id='cod' onClick={(e) => setPaymentType(e.target.id)} /></ContLabel>
                            </Cont>
                        </Cont>
                        {paymentType === "credit card" ?
                            <CheckoutCont>
                                <ContLabel fluid>Please input according to your {paymentType}:</ContLabel>

                                <ContSelect>
                                    <ContOption id='' onClick={(e) => setPaymentType(e.target.id)}>Select Card Type</ContOption>
                                    <ContOption id='visa' onClick={(e) => setPaymentType(e.target.id)}>Visa</ContOption>
                                    <ContOption id='mastercard' onClick={(e) => setPaymentType(e.target.id)}>MasterCard</ContOption>
                                    <ContOption id='discover card' onClick={(e) => setPaymentType(e.target.id)}>Discover Card</ContOption>
                                </ContSelect>
                                <Cont>
                                    <ContLabel>Credit Card Name :</ContLabel>
                                    <ContInput placeholder='Enter Credit Card Name' />
                                </Cont>
                                <Cont>
                                    <ContLabel>Credit Card Number :</ContLabel>
                                    <ContInput placeholder='Enter Credit Card Number' />
                                </Cont>
                                <Cont>
                                    <ContLabel>Expires :</ContLabel>
                                    <ContInput sm type='number' min={0} placeholder='month' />
                                    <ContInput sm type='number' min={0} placeholder='year' />
                                </Cont>
                                <Cont>
                                    <ContLabel>CVC :</ContLabel>
                                    <ContInput sm placeholder='cvc' min={0} />
                                </Cont>

                            </CheckoutCont>
                            : null

                        }

                        {paymentType === "wallet" ?
                            <CheckoutCont>
                                <ContLabel fluid>Not available at the moment!:</ContLabel>

                            </CheckoutCont>
                            : null

                        }
                        {paymentType === "cod" ?
                            <CheckoutCont>
                                <ContLabel fluid>Note : You will be charged for the delivery fee!</ContLabel>
                            </CheckoutCont>
                            : null

                        }
                    </ShippingSubCont>
                </ShippingCont>
                <ShippingProceed>
                    <ProceedBtn> Proceed Shipping</ProceedBtn>
                </ShippingProceed>
            </ShippingSection>
            <Footer />
        </Main>
    )
}

export default Shipping
