import React from 'react';

//Framer motion
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const ContactUs = () => {
    return(
        <motion.div variants={pageAnim} animate="shown" initial="hidden" exit="exit" style={{background: '#fff'}}>
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default ContactUs;