import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.svg"

const HeaderConatiner = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 5rem;
background-color: #0a0b10;
color: var(--white);
position: relative;
z-index:500;
`;

const Logo = styled.a`
display: flex;
align-items: center;
width: 2rem;
height: auto;
cursor: pointer;
img{
    margin-right: 0.5rem;
}
`;

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;

  @media only Screen and (max-width:48em){
    display: none;
}

  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    font-family: 'Roboto', sans-serif;
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
}
`;

const Button = styled.button`
 background-color: var(--purple);
 padding: 0.5rem 1rem;
 border-radius: 20px;
 color: white;
 font-weight: 600;
 font-family: 'Roboto', sans-serif;
 cursor: pointer;
 transition: all 0.2s;

 &:hover{
     transform: scale(1.1);
 }
 &:focus{
     transform: scale(0.9);
 }
`;

const HamburgerBtn = styled.button`
position: relative;
background-color: transparent;
width: 2rem;
height: 2px;
cursor: pointer;
display: none;

@media only Screen and (max-width:48em){
    display: inline-block;
}

&::before,&::after{
    content: "";
    background-color: white;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
}
&::before{
    top: ${props => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}
&::after{
    top: ${props => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}
`;
const MobileMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem 0;
position: absolute;
top: 100%;
left: 0;
right: 0;
background: rgba(53,53,63,0.95);
border-radius: 20px;
margin: 0.5rem;
overflow-x: hidden;
opacity: ${props => (
    props.clicked? "1" : 0
)};
visibility: ${props => (
    props.clicked? "visible" : "hidden"
)};
a{
    color: white;
    padding: 0.5rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
}
`

function Header(){
     const [click, setClick] = useState(false);
     const handleClick = () => setClick(!click);
    return (
        <HeaderConatiner>
            <Logo>
                <img src={logo} alt="logo"/>
                <h3>CodeBucks</h3>
            </Logo>
            <Nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contsct"><Button>Contact</Button></a>
            </Nav>
            <HamburgerBtn clicked={click} onClick={handleClick}>
                <span></span>
            </HamburgerBtn>
            <MobileMenu clicked={click}>
            <a href="#home" onClick={handleClick}>Home</a>
                <a href="#about" onClick={handleClick}>About</a>
                <a href="#services" onClick={handleClick}>Services</a>
                <a href="#contsct" onClick={handleClick}><Button>Contact</Button></a>
            </MobileMenu>
        </HeaderConatiner>
    )
}

export default Header
