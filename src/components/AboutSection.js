import React from 'react';
import home1 from '../img/home1.png';
//Styled
import {About, Description, Image, Hide} from '../styles';

//Framer motion
import { motion} from 'framer-motion';

const AboutSection = () => {

    const titleAnim ={
        hidden: { opacity:0 },
        shown: { opacity:1, transition: {duration:2}},
    }
    const container ={
        hidden: { x:100 },
        shown: { x:0, transition: {duration:0.75,ease:'easeOut', staggerChildren: 1,}},
    }

    return(
        <About>
            <Description>

                <motion.div variants={container} animate="shown" initial="hidden" className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your  <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </Hide>
                </motion.div>

                <p>Contact us for Photography or Videography ideas that you have. We have professionals with amazing skills.</p>

                <button>Contact Us</button>

            </Description>

            <Image>
                <img src={home1} alt="Guy with a camera"/>
            </Image>

        </About>
    );
}

export default AboutSection;