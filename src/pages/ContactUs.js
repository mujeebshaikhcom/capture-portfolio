import React from 'react';

//Framer motion
import {motion} from 'framer-motion';
import {pageAnim,titleAnim} from '../animation';
import {Hide} from '../styles';
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyled variants={pageAnim} animate="shown" initial="hidden" exit="exit" style={{background: '#fff'}}>
            <Title>
                <Hide>
                    <motion.h2 variants ={titleAnim}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <Hide>
                <Social variants ={titleAnim}>
                    <Circle/>
                    <h2>Send us a message</h2>
                </Social>
            </Hide>
            <Hide>
                <Social variants ={titleAnim}>
                    <Circle/>
                    <h2>Meet us</h2>
                </Social>
            </Hide>
            <Hide>
                <Social variants ={titleAnim}>
                    <Circle/>
                    <h2>Social media</h2>
                </Social>
            </Hide>
        </ContactStyled>
    )
}

const ContactStyled = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`
const Title = styled.div `
    margin-bottom: 4rem;
    color: #000;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin:2rem;
    }
`

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

export default ContactUs;