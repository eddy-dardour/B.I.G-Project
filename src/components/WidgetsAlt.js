import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import VanillaTilt from "vanilla-tilt";

const settings = {
  transition: true,
  glare: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  speed: 1000,
  "max-glare": 1,
  max: 30,
};
export default function WidgetsAlt() {
  return (
    <>
      <WidgetsAlt1 settings={settings} />
    </>
  );
}

function WD2() {
  const Rainbow = styled.div`
    background-color: red;
    padding: 10px;
    border-radius: 50%;
    height: 40px;
    margin-left: 150px;
    margin-top: 50px;
    width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 10px orange, 0 0 0 20px yellow, 0 0 0 30px chartreuse,
      0 0 0 40px green, 0 0 0 50px skyblue, 0 0 0 60px blue, 0 0 0 70px purple;
  `;
  const RainbowGradient = styled.div`
    background: radial-gradient(
      circle,
      rgba(236, 0, 0, 1) 0%,
      rgba(255, 0, 0, 1) 10%,
      rgba(227, 99, 0, 1) 20%,
      rgba(153, 236, 4, 1) 30%,
      rgba(69, 246, 45, 1) 40%,
      rgba(40, 255, 32, 1) 50%,
      rgba(106, 252, 233, 1) 60%,
      rgba(111, 118, 249, 1) 70%,
      rgba(255, 53, 250, 1) 80%
    );
    border-radius : 100%;
    transform: translateZ(70px);
    height: 180px;
    margin-left: 150px;
    margin-top: 50px;
    width: 180px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      <Rainbow>Test</Rainbow>
      <RainbowGradient>Test</RainbowGradient>
    </>
  );
}

export function WidgetsAlt1(props) {
  const { settings } = props;
  useEffect(() => {
    VanillaTilt.init([ref.current, ref2.current], settings);
  }, [settings]);
  const ref = useRef(null);
  const ref2 = useRef(null);
  return (
    <Background>
      <WidgetDiv1 ref={ref}>
        <WD1 />
      </WidgetDiv1>
      <WidgetDiv1 ref={ref2}>
        <WD2 />
      </WidgetDiv1>
    </Background>
  );
}

function WD1() {
  return (
    <Grid>
      <Grid1 className='grid1'>Test of the grid</Grid1>

      <Grid2 className='grid2'>Test of the grid</Grid2>

      <Grid3 className='grid3'>Test of the grid</Grid3>
    </Grid>
  );
}
const Grid1 = styled.div`
    border-radius : 15px;
    background-color : rgba(255, 255 , 0 , 1)
    grid-area : a;
`;
const Grid2 = styled.div``;
const Grid3 = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  grid-template-areas:
    "a b"
    "a c";
  grid-gap: 10px;
  padding: 10px;
  ${Grid2} {
    border-radius: 15px;
    background-color: rgba(0, 255, 255, 0.4);
    grid-area: b;
  }
  ${Grid3} {
    border-radius: 15px;
    background-color: rgba(0, 255, 255, 0.4);
    grid-area: c;
  }
`;

const WidgetDiv1 = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  transform : perspective(1000px);
  transform-style : preserve-3d;
`;
const BgAnim = keyframes`
    from {
        background-position : 0 0;
    }
    to {
        background-position : 100% 100%;
    }
`;
const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  backdrop-filter: blur(600px);
  background-size: 200% 200%;
  background-image: linear-gradient(
    to bottom right,
    #fcc5e4 0%,
    #fda34b 15%,
    #ff7882 35%,
    #c8699e 52%,
    #7046aa 71%,
    #0c1db8 87%,
    #020f75 100%
  );
  animation: ${BgAnim} 4s linear infinite alternate-reverse;
  width: 100%;
  position: absolute;
  height: 100%;
`;
