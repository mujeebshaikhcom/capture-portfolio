import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <h1><Link to="/" id="logo">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line 
                        transition={{duration:0.35, ease: 'easeOut'}}
                        initial={{width: "0%"}}
                        animate= {{width: pathname === '/'? '120%' : "0%"}}
                    />
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line 
                        transition={{duration:0.35, ease: 'easeOut'}}
                        initial={{width: "0%"}}
                        animate= {{width: pathname === '/work'? '120%' : "0%"}}
                    />
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line 
                        transition={{duration:0.35, ease: 'easeOut'}}
                        initial={{width: "0%"}}
                        animate= {{width: pathname === '/contact'? '120%' : "0%"}}
                    />
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 3;
    a {
        color: #fff;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-Style-type: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        margin-left: 10rem;
        position: relative;
    }
`

const Line = styled(motion.div)`
    height: 0.275rem;
    background: #23d997;
    width: 0;
    position: absolute;
    bottom: -30%;
    left: 0%;
`

export default Nav;