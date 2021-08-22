import React from 'react'
import styled,  { keyframes } from 'styled-components';
import hand from "../assets/hand.svg";
import rocket from "../assets/rocket image.png";
import human from "../assets/human.svg"

const move = keyframes`
0% { transform: translateY(-15px)         }
    50% { transform: translateY(20px) translateX(20px)        }
    100% { transform: translateY(-15px)         }
`;


const AboutSection = styled.div`
 width: 100vw;
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;
const Hand = styled.div`
position: absolute;
bottom: -1rem;
right: 0;
@media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Main = styled.div`
margin: 0 15rem;
margin-top: 3rem;
display: flex;
justify-content: center;
flex-direction: column;

@media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }

`;

const Title = styled.div`
display: inline-block;
font-size: 2rem;
`;
const CurvedLine = styled.div`
 width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;
const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
function About() {
    return (
     <AboutSection>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height="300">
          <path fill="#0a0b10" fill-opacity="1" d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,218.7C1120,203,1280,117,1360,74.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
         </svg>
         <Hand>
             <img src={hand} alt="Hand" height="400" width="400" />
         </Hand>
         <Main>
             <div>
                 <Title>About Us</Title>
                 <CurvedLine />
             </div>
             <Content>
          <Rocket>
            <img src={rocket} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text>
              We help our customers to tell about themselves, to grow and stand
              out in an increasingly competitive digital world, through creative
              projects that are able to attract and involve, creating strategic
              value.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
            </AboutText>
            </Content>
         </Main>
     </AboutSection>
    )
}

export default About
