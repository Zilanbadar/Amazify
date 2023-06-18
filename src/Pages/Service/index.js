import React, { useState } from 'react'
import {
    Main,
    HeroSection,
    TextCont,
    TextHead,
    TextPara,
    ServiceSection,
    ServiceHead,
    ServiceCont,
    ServiceOverlay,
    ServicePara,
    ServiceItem,
    ServiceIcon,
    IconStyle,
    ServiceItemHead,
    ContHover,
    ContactSection,
    ContactCont,
    ContactHead,
    ContactPara,
    ContactButton,
} from './serviceElements'
import { FaShippingFast, FaCartArrowDown } from 'react-icons/fa'
import { BsBoxSeamFill, BsCashCoin } from 'react-icons/bs'
import { AiTwotoneShopping } from 'react-icons/ai'
import { MdMiscellaneousServices } from 'react-icons/md'
import Footer from '../../Components/Footer'

const Services = () => {

    const [contHover1, setContHover1] = useState(false)
    const [contHover2, setContHover2] = useState(false)
    const [contHover3, setContHover3] = useState(false)
    const [contHover4, setContHover4] = useState(false)
    const [contHover5, setContHover5] = useState(false)
    const [contHover6, setContHover6] = useState(false)
    return (
        <Main>
            <HeroSection>
                <TextCont>
                    <TextHead>
                        ``WE ARE THE PROVIDERS``
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
            <ServiceSection>
                <ServiceHead>Our Services</ServiceHead>
                <ServicePara>
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Sapiente velit ipsa consequuntur
                    cupiditate distinctio deserunt culpa sequi maiores
                    aliquid, officia nemo magni eligendi dolorum sint
                    aperiam quaerat cum facere? Dolorum!
                </ServicePara>
                <ServiceCont>
                    <ServiceItem onMouseEnter={() => setContHover1(true)} onMouseLeave={() => setContHover1(false)} style={contHover1 ? ContHover : null}>
                        <ServiceIcon style={contHover1 ? { height: '0' } : { height: '70px' }}>
                            <FaShippingFast style={IconStyle} />
                        </ServiceIcon>
                        <ServiceItemHead style={contHover1 ? { color: '#ff9900' } : null}>
                            International Shipping
                        </ServiceItemHead>
                        <ServiceOverlay style={contHover1 ? { display: "block" } : { display: "none" }}>
                            You can now buy products from USA stores that do not ship internationally.
                            How? Place an order on our website and we'll buy the items on your behalf
                            and ship them to your international address.
                        </ServiceOverlay>
                    </ServiceItem>
                    <ServiceItem onMouseEnter={() => setContHover2(true)} onMouseLeave={() => setContHover2(false)} style={contHover2 ? ContHover : null}>
                        <ServiceIcon style={contHover2 ? { height: '0' } : { height: '70px' }}>
                            <BsBoxSeamFill style={IconStyle} />
                        </ServiceIcon>
                        <ServiceItemHead style={contHover2 ? { color: '#ff9900' } : null}>
                            Access & Discover
                        </ServiceItemHead>
                        <ServiceOverlay style={contHover2 ? { display: "block" } : { display: "none" }}>
                            Get access to exclusive products that are not available in your country.
                            New brands and stores are added to our platform daily. You can rely on Big
                            Apple Buddy to help you discover the latest products from the USA.
                        </ServiceOverlay>
                    </ServiceItem>
                    <ServiceItem onMouseEnter={() => setContHover3(true)} onMouseLeave={() => setContHover3(false)} style={contHover3 ? ContHover : null}>
                        <ServiceIcon style={contHover3 ? { height: '0' } : { height: '70px' }}>
                            <FaCartArrowDown style={IconStyle} />
                        </ServiceIcon>
                        <ServiceItemHead style={contHover3 ? { color: '#ff9900' } : null}>
                            One Stop Shop
                        </ServiceItemHead>
                        <ServiceOverlay style={contHover3 ? { display: "block" } : { display: "none" }}>
                            We're the only platform in the world that allows you to shop hundreds of
                            USA stores with just one checkout. No need to place multiple orders on
                            multiple sites. Shopping has never been easier!
                        </ServiceOverlay>
                    </ServiceItem>
                    <ServiceItem onMouseEnter={() => setContHover4(true)} onMouseLeave={() => setContHover4(false)} style={contHover4 ? ContHover : null}>
                        <ServiceIcon style={contHover4 ? { height: '0' } : { height: '70px' }}>
                            <AiTwotoneShopping style={IconStyle} />
                        </ServiceIcon>
                        <ServiceItemHead style={contHover4 ? { color: '#ff9900' } : null}>
                            Unrivalled Product Range
                        </ServiceItemHead>
                        <ServiceOverlay style={contHover4 ? { display: "block" } : { display: "none" }}>
                            Our platform features millions of tech, fashion, beauty, outdoors & fitness
                            products from the USA. Can't find what you're looking for on our website?
                            Get in touch and we'll personally source the item for you.
                        </ServiceOverlay>
                    </ServiceItem>
                    <ServiceItem onMouseEnter={() => setContHover5(true)} onMouseLeave={() => setContHover5(false)} style={contHover5 ? ContHover : null}>
                        <ServiceIcon style={contHover5 ? { height: '0' } : { height: '70px' }}>
                            <BsCashCoin style={IconStyle} />
                        </ServiceIcon>
                        <ServiceItemHead style={contHover5 ? { color: '#ff9900' } : null}>
                            Transparent Pricing
                        </ServiceItemHead>
                        <ServiceOverlay style={contHover5 ? { display: "block" } : { display: "none" }}>
                            We value transparency as much as you do. We will always provide a breakdown
                            of costs so you can see exactly how your order is calculated. No hidden fees
                            – that's our promise!
                        </ServiceOverlay>
                    </ServiceItem>
                    <ServiceItem onMouseEnter={() => setContHover6(true)} onMouseLeave={() => setContHover6(false)} style={contHover6 ? ContHover : null}>
                        <ServiceIcon style={contHover6 ? { height: '0' } : { height: '70px' }}>
                            <MdMiscellaneousServices style={IconStyle} />
                        </ServiceIcon>
                        <ServiceItemHead style={contHover6 ? { color: '#ff9900' } : null}>
                            Personalized Service
                        </ServiceItemHead>
                        <ServiceOverlay style={contHover6 ? { display: "block" } : { display: "none" }}>
                            We understand that every purchase is unique which is why your order will
                            be handled personally by a member of our team from start to finish. All
                            enquiries will be answered within 24 hours, 7 days a week.
                        </ServiceOverlay>
                    </ServiceItem>
                </ServiceCont>
            </ServiceSection>
            <ContactSection>
                <ContactCont>
                    <ContactHead>
                        Contact Us
                    </ContactHead>
                    <ContactPara>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Sapiente velit ipsa consequuntur
                        cupiditate distinctio deserunt culpa sequi maiores
                        aliquid, officia nemo magni eligendi dolorum sint
                        aperiam quaerat cum facere? Dolorum!
                    </ContactPara>
                    <ContactButton>
                        Contact Now
                    </ContactButton>
                </ContactCont>
            </ContactSection>
            <Footer/>
        </Main>
    )
}

export default Services
