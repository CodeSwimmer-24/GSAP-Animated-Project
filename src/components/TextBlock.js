import React from 'react'
import styled from 'styled-components';

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  color: aliceblue(--white);
  @media only Screen and (max-width: 48em) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

function TextBlock({title,topic}) {
    return (
        <Lb id="leftBlock">
        <Topic>
          <Circle />
          <span>{topic}</span>
        </Topic>
        <Title>{title}</Title>
        <SubText>
          we help fast growing companies build award winning websites
        </SubText>
      </Lb>
    )
}

export default TextBlock
