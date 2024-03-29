import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//Framer motion
import {motion} from 'framer-motion';
import {pageAnim, photoAnim, fade, lineAnim, slidAnim, slidAnimContainer} from '../animation';

import useScroll from '../components/useScroll';

const OurWork = () => {
    const [element,controls] = useScroll();
    const [element2,controls2] = useScroll();
    return(
        <Work variants={pageAnim} initial="hidden" animate="shown" exit="exit" style={{background: '#fff'}}>
            <motion.div initial="hidden" animate="shown" variants={slidAnimContainer}>
                <Frame1 variants={slidAnim}></Frame1>
                <Frame2 variants={slidAnim}></Frame2>
                <Frame3 variants={slidAnim}></Frame3>
                <Frame4 variants={slidAnim}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade} initial='hidden' animate='shown'>The Athlete</motion.h2>
                <motion.div variants={lineAnim} initial='hidden' animate='shown' className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} initial='hidden' animate='shown' src={athlete}  alt="Athelete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img variants={photoAnim} src={theracer}  alt="The racer" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element2} variants={fade} animate={controls2} initial='hidden'>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <motion.img variants={photoAnim} src={goodtimes}  alt="Good Times" />
                    </Hide>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        margin-bottom: 3rem;
        background: #23d997;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Hide = styled.div `
    overflow: hidden;
`

// frames animation
const Frame1 = styled(motion.div) `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1) `
    background: #ff8efb;
`
const Frame3 = styled(Frame1) `
    background: #8ed2ff;
`
const Frame4 = styled(Frame1) `
    background: #8effa0;
`

export default OurWork;