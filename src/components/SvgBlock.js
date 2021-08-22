import React from "react";
import styled from "styled-components";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 100%;
    height: auto;
  }
  @media only Screen and (max-width: 48rem) {
    display: block;
    &:last-child{
        margin-bottom: 2rem;
    }

  }
`;

const SvgBlock = ({ svg }) => {
    console.log(svg)
  const SvgDonet = require(`../assets/3dtube.png`).default;
  const SvgIcon = require(`../assets/Design.svg`).default;
  console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
        {/* <img src={SvgDonet} alt="Donet" height='400' width="400"/> */}
      <img src={SvgIcon} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;