import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";
const anim1 = keyframes`
    from {
      width : 0%;
      background-color : blue;
      text-overflow : hidden;
    };
    to {
      width : 100%;
      background-color : red;
    }
`;
const Style = {
  backgroundColor: "red",
  width: "100%",
  fontSize: "15px",
  borderRadius: "15px",
};
const Style2 = {
  marginTop: "20px",
  width: "90%",
  height: "30px",
  margin: "auto",
  borderRadius: "15px",
};

const CHART_INFO = {
  labels: ["Pears", "Apples", "Tomatoes", "Bananas"],
  datasets: [
    {
      label: "Fruits",
      data: ["10", "25", "40", "80"],
      backgroundColor: ["#ffffff", "#000000", "#50AF95", "#ffff22"],
    },
  ],
};

const ChartFunc = ({ data }) => {
  return (
    <div>
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Fruits",
            },
            legend: {
              display: true,
              position: "top",
            },
          },
        }}
      />
    </div>
  );
};

export default function Home() {
  const Div2 = styled.div`
    animation: ${anim1} 5s;
  `;
  const ChartBox = styled.div`
    width: 50%;
    height: 50%;
    border-radius: 5px;
    transition : 0.4s;
    margin : auto;
    background-color: rgba(240, 240, 240, 0.5);
    &:hover{
      background-color : red;
    }
  `;
  return (
    <>
      <div className='progress' style={Style2}>
        <Div2 className='progress-bar' style={Style}>
          Loading...
        </Div2>
      </div>
      <ChartBox>
        <ChartFunc data={CHART_INFO} />
      </ChartBox>
    </>
  );
}
