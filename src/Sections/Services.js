import React from 'react'
import styled from 'styled-components';
// import SvgBlock from '../components/SvgBlock';
import TextBlock from '../components/TextBlock';
import design from "../assets/Design.svg";
import support from "../assets/Support.svg"
import donot from "../assets/3dtube.png";
import Cone from "../assets/3dtriangle.png";
import Capsule from "../assets/3dcapsule.png";
import develop from "../assets/Develope.svg"

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;
const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;
const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;
const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;
const Content = styled.div`
display: flex;
margin: 3rem 10rem;
align-items: center;
justify-content: space-between;
position: relative;
`;
const OBJ = styled.div`
position: absolute;
top: 80%;
right:40%;
width: 15vw;
display: flex;
justify-content: center;
align-items: center;
@media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`
const SvgBlock = styled.div`
width: 25vw;
`;
function Services() {
    return (
      <ServiceSection id="services">
          <Background>
              <Title>What we Do</Title>
              <Line />
              <Triangle />
          </Background>
          <Content>
              <TextBlock topic="Design" title="We build award winning Designs"/>
              <OBJ>
                  <img src={donot} />
              </OBJ>
              <SvgBlock>
              <img src={design}/>
              </SvgBlock>
          </Content>
          <Content>
              <TextBlock topic="Development" title="We developed high quality web app"/>
           
              <OBJ>
                  <img src={Cone} height="400" width="400"/>
              </OBJ>
              <SvgBlock>
              <img src={develop} />
              </SvgBlock>
            
          </Content>
          <Content>
              <TextBlock topic="Support" title="We provide support for uour digital presence"/>
              <OBJ>
                  <img src={Capsule} />
              </OBJ>
              <SvgBlock>
                  <img src={support} />
              </SvgBlock>
          </Content>
      </ServiceSection>
    )
}

export default Services
