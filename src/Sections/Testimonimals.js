import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from '../components/Card';
import avatar1 from "../assets/avatar-1.jpg"
import avatar2 from "../assets/avatar-2.jpg"
import avatar3 from "../assets/avatar-3.jpg"
import avatar4 from "../assets/avatar-4.jpg"

const Section = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;
const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
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
    border-bottom: 2px solid var(--purple);
  }
`;
const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .slick-slider .slick-arrow:before{
   color: var(--black);
   font-size: 1.5rem;
  }
  .slick-slider .slick-dots button:before{
   color: var(--black);
   font-size: 1rem;
  }
  .slick-slide.slick-active{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin:0 ;
      padding: 0;
      margin-bottom: 3rem;
  }
  `;
function Testimonimals() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       <Section>
           <Title>
               Few good words about us!
           </Title>
           <Carousal>
           <Slider {...settings}>
         <Card text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
         name="Jon (React)" 
         image={avatar1} />
          <Card text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
         name="Jon (React)" 
         image={avatar2} />
          <Card text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
         name="Jon (React)" 
         image={avatar3} />
          <Card text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
         name="Jon (React)" 
         image={avatar4} />
        </Slider>
           </Carousal>
       </Section>
    )
}

export default Testimonimals
