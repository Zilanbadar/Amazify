import React from 'react'
import {
    Main,
    HeroSection,
    TextCont,
    TextHead,
    TextPara,
    ContactSection,
    ContactHead,
    ContactItems,
    ContactItemHead,
    ContactForm,
    ContactInputs,
    ContactMap,
    Cont,
    InputHead,
    InputField,
    InputArea,
    FormSubmit,
} from './contactElements'
import Footer from '../../Components/Footer'
import {MdLocationOn,MdLocalPhone, MdEmail} from 'react-icons/md'

const Contact = () => {

    const IconStyle = {
        width: "75px",
        height : "75px",
        color: "#ff9900"
    }
  return (
    <Main>
            <HeroSection>
                <TextCont>
                    <TextHead>
                        ``GET IN TOUCH WITH AMAZIFY``
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
            <ContactSection>
                <ContactHead>
                    <ContactItems>
                        <MdLocationOn  style={IconStyle}/>
                        <ContactItemHead>
                            Street 21, Nv 534, NT
                        </ContactItemHead>

                    </ContactItems>
                    <ContactItems>
                        <MdLocalPhone style={IconStyle}/>
                        <ContactItemHead>
                            +92-3111-111-222
                        </ContactItemHead>
                    </ContactItems>
                    <ContactItems>
                        <MdEmail style={IconStyle}/>
                        <ContactItemHead>
                            example@gmail.com
                        </ContactItemHead>
                    </ContactItems>
                </ContactHead>
                <ContactForm>
                    <ContactInputs>
                        <Cont>
                            <InputHead>Email:</InputHead>
                            <InputField></InputField>
                        </Cont>
                        <Cont>
                            <InputHead>Leave a message:</InputHead>
                            <InputArea rows={7}></InputArea>
                        </Cont>
                        <FormSubmit>
                            Submit
                        </FormSubmit>

                    </ContactInputs>
                    <ContactMap>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51669.1385907176!2d74.35874120000001!3d35.96357285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1686598469628!5m2!1sen!2s" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </ContactMap>
                </ContactForm>
            </ContactSection>
            <Footer/>
        </Main>
  )
}

export default Contact
