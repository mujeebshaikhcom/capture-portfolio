import React from 'react';
//Page components
import AboutSection from '../components/AboutSection';
import ServicesSection from  '../components/ServicesSection';
import FaqSection from  '../components/FaqSection';

//Framer motion
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const AboutUs = () => {
    return (
    <motion.div variants={pageAnim} initial="hidden" animate="shown" exit="exit">
        <AboutSection />
        <ServicesSection />
        <FaqSection />
    </motion.div>
    );
}

export default AboutUs;