import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import { Palette } from "./Header";
export default function Calculator() {
  const [scientific, setScientific] = useState(true);
  const transition = useTransition(scientific, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const [display, setDisplay] = useState("");
  return (
    <>
      <button
        className='btn btn-danger'
        onClick={() => {
          setScientific(!scientific);
          setDisplay("");
        }}
      >
        {scientific === false
          ? "Switch to classic mode"
          : "Switch to scientific mode"}
      </button>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className='row'>
            <CalcDiv className='offset-lg-4 offset-md-4 offset-1 col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3'>
              <CalcScreen>{display}</CalcScreen>
              <CalcGrid>
                <CalcButton className='DEL' onClick={() => setDisplay("")}>
                  DEL
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.sqrt(${display})`)}>
                  Sqrt
                </CalcButton>
                <CalcButton
                  onClick={() => setDisplay(display + ` * ${display}`)}
                >
                  x²
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.cos(${display})`)}>
                  cos()
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + ".")}>
                  .
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "1")}>
                  1
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "2")}>
                  2
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "3")}>
                  3
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "+")}>
                  +
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "-")}>
                  -
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "4")}>
                  4
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "5")}>
                  5
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "6")}>
                  6
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "*")}>
                  *
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "/")}>
                  /
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "7")}>
                  7
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "8")}>
                  8
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "9")}>
                  9
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "0")}>
                  0
                </CalcButton>
                <CalcButton
                  className='EQUAL'
                  onClick={() =>
                    setDisplay(
                      //eslint-disable-next-line
                      eval(display)
                    )
                  }
                >
                  =
                </CalcButton>
              </CalcGrid>
            </CalcDiv>
          </animated.div>
        ) : (
          <animated.div style={style} className='row'>
            <CalcDiv className='offset-lg-2 offset-md-3 offset-1 col-11 col-sm-10 col-md-9 col-lg-9 col-xl-9'>
              <CalcScreen>{display}</CalcScreen>
              <CalcGrid className='scientific'>
                <CalcButton className='DEL' onClick={() => setDisplay("")}>
                  DEL
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.sqrt(${display})`)}>
                  Sqrt
                </CalcButton>
                <CalcButton
                  onClick={() => setDisplay(display + ` * ${display}`)}
                >
                  x²
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.cos(${display})`)}>
                  cos()
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.sin(${display})`)}>
                  sin()
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.tan(${display})`)}>
                  tan()
                </CalcButton>
                <CalcButton
                  onClick={() => setDisplay(`Math.random() * ${display}`)}
                >
                  Random(x)
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.log(${display})`)}>
                  log()
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "(")}>
                  (
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + ")")}>
                  )
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + ",")}>
                  ,
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.tanh(${display})`)}>
                  tanh
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "*10")}>
                  10x
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.acos(${display})`)}>
                  cos-1
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.asin(${display})`)}>
                  sin-1
                </CalcButton>
                <CalcButton
                  onClick={() => setDisplay(`Math.round(${display})`)}
                >
                  round
                </CalcButton>
                <CalcButton onClick={() => setDisplay(`Math.ceil(${display})`)}>
                  ceil
                </CalcButton>
                <CalcButton
                  onClick={() => setDisplay(`Math.floor(${display})`)}
                >
                  floor
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "1")}>
                  1
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "2")}>
                  2
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "3")}>
                  3
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "0")}>
                  0
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "+")}>
                  +
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "-")}>
                  -
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "4")}>
                  4
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "5")}>
                  5
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "6")}>
                  6
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + ".")}>
                  .
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "/")}>
                  /
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "*")}>
                  *
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "7")}>
                  7
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "8")}>
                  8
                </CalcButton>
                <CalcButton onClick={() => setDisplay(display + "9")}>
                  9
                </CalcButton>
                <CalcButton
                  className='EQUAL'
                  onClick={() =>
                    setDisplay(
                      //eslint-disable-next-line
                      eval(display)
                    )
                  }
                >
                  =
                </CalcButton>
              </CalcGrid>
            </CalcDiv>
          </animated.div>
        )
      )}
    </>
  );
}

const CalcButton = styled.button`
  background-color: ${Palette.secondary};
  border-radius: 5px;
  padding: 2px;
  box-shadow: 2px 2px 2px black;
  border: 2px solid ${Palette.fourth};
`;
const CalcGrid = styled.div`
  .DEL {
    background-color: red;
    color: white;
  }
  .EQUAL {
    background-color: white;
    color: black;
  }

  width: 90%;
  height: 70%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;
`;

const CalcScreen = styled.div`
  padding: 20px;
  text-transform: uppercase;
  overflow-x: auto;
  overflow-y: hidden;
  font-size: 30px;
  text-shadow: 1px 1px 2px grey;
  border-radius: 5px;
  box-shadow: 1px 1px 2px black;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 80px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${Palette.fourth};
`;

const CalcDiv = styled.div`
  background-color: ${Palette.fifth};
  height: 500px;
  border: 5px solid ${Palette.secondary};
  box-shadow: 1px 1px 2px black;
  border-radius: 30px;
  .scientific {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
