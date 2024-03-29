import { motion } from 'framer-motion';
import styled from 'styled-components';

//Styled component
export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #fff;
    @media (max-width: 1300px) {
        display: block;
        text-font-size: center;
        padding: 2rem;
    }
`

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem;
        }
    }
`

export const Image = styled.div`
    flex: 1;
    z-index: 2;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
        overflow: hidden;
    }
`

export const Hide = styled.div`
    overflow: hidden;
`