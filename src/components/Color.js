import React, { useState } from "react";
import styled from "styled-components";

export default function Color() {
  const [color, setColor] = useState("");
  const ColorDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    border-radius: 20px;
    background-color: ${color};
  `;

  function ColorGen() {
    function Gen() {
      const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push(range[Math.round(Math.random() * 14)]);
      }
      console.log(arr);
      return arr.join("");
    }
    setColor("#" + Gen());
  }
  return (
    <ColorDiv>
      <button className='btn btn-danger offset-4 col-4' onClick={ColorGen}>
        Generate color
      </button>
      <p className='offset-4 col-4 bg-dark py-2'>{color}</p>
    </ColorDiv>
  );
}
