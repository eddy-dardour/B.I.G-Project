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

export function WidgetsAlt1(props) {
  const { settings } = props;
  useEffect(() => {
    VanillaTilt.init(ref.current, settings);
  }, [settings]);
  const ref = useRef(null);
  return (
    <Background>
      <WidgetDiv1 ref={ref}>
        <WD1 />
      </WidgetDiv1>
    </Background>
  );
}

export function sum(a, b) {
  return a + b;
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
