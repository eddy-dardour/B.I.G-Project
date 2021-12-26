import React, { useRef } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const settings = {
  scale: 1.2,
  speed: 1000,
  max: 30,
};

export default function Widgets() {
  return (
    <>
      <Widget1 settings={settings} />
      <Widget1 settings={settings} />
      <Widget1 settings={settings} />
      <Widget1 settings={settings} />
    </>
  );
}

function Widget1(props) {
  useEffect(() => {
    VanillaTilt.init(Card1.current, props);
    VanillaTilt.init(Card2.current, props);
    VanillaTilt.init(Card3.current, props);
  }, [props]);
  const Card1 = useRef(null);
  const Card2 = useRef(null);
  const Card3 = useRef(null);
  return (
    <>
      <Circles>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
      </Circles>
      <DivWidgets>
        <div className='card' ref={Card1}>
          <h1>1</h1>
          <h2>Name</h2>
          <p>Description</p>
        </div>
        <div className='card' ref={Card2}>
          <h1>2</h1>
          <h2>Name</h2>
          <p>Description</p>
        </div>
        <div className='card' ref={Card3}>
          <h1>3</h1>
          <h2>Name</h2>
          <p>Description</p>
        </div>
      </DivWidgets>
    </>
  );
}

const DivWidgets = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  backdrop-filter: blur(4);
  border-radius: 20px;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.5);
  border-top: rgba(255, 255, 255, 1);
  border-left: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  background-color: rgba(255, 255, 255, 0.2);
  .card {
    z-index: 2;
    flex: 1;
    font-weight: bold;
    color: white;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    margin: 10px;
    text-align: center;
    overflow: auto;
  }
`;

const Circles = styled.div`
  .circle-1 {
    @media screen and (max-width: 600px) {
      height: 150px;
      width: 150px;
      position: absolute;
      top: 100px;
      left: 130px;
    }
    filter: blur(0.1px);
    border-radius: 50%;
    height: 400px;
    width: 400px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-170px, 70px);
    background: linear-gradient(
      120deg,
      rgba(236, 0, 123, 1) 0%,
      rgba(208, 32, 255, 1) 29%,
      rgba(163, 32, 255, 1) 54%,
      rgba(53, 255, 198, 1) 100%
    );
  }
  .circle-2 {
    @media screen and (max-width: 600px) {
      height: 200px;
      width: 200px;
      position: absolute;
      top: 100px;
      transform: translate(80px, 250px);
    }
    border-radius: 50%;
    height: 600px;
    width: 600px;
    filter: blur(0.1px);
    position: absolute;
    top: 100px;
    right: 0;
    transform: translateX(200px);
    background: linear-gradient(
      300deg,
      rgba(0, 236, 27, 1) 0%,
      rgba(32, 255, 174, 1) 22%,
      rgba(32, 59, 255, 1) 58%,
      rgba(53, 255, 198, 1) 100%
    );
  }
`;
