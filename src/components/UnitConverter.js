import React from "react";
import styled from "styled-components";
export default function UnitConverter() {
  
  const Div = styled.div`
    color: white;
    width: 50%;
    margin: auto;
    height: 400px;
    margin-top: 50px;
    border-radius: 15px;
    div {
      height: 25%;
      text-align: center;
      margin-top: 10px;
      font-size: 25px;
    }
  `;

  return (
    <Div className='container row d-flex bg-dark p-4 offset-1 col-10'>
      <form>
        <div>
          <label for='unit1' className='me-2 my-2'>
            Select an unit
          </label>
          <select id='unit1'>
            <option>Meters</option>
            <option>Kilometers</option>
            <option>Inches</option>
          </select>
          <input
            required
            name="input1"
            pattern='^[0-9]+$'
            placeholder='Insert your value here'
            type='number'
          />
        </div>

        <div>
          <input value='Convert' type='submit' className='py-2 my-3'></input>
        </div>

        <div>
          <label for='unit2' className='me-2 my-2'>
            Select an unit
          </label>
          <select id='unit2'>
            <option>Meters</option>
            <option>Kilometers</option>
            <option>Inches</option>
          </select>
          <input
            name="input2"
            pattern='^[0-9]*$'
            placeholder='Insert your value here'
            type='number'
            required
          />
        </div>
      </form>
    </Div>
  );
}
