import React, {useEffect, useState} from 'react'
import { keyframes } from 'styled-components'
import styled from 'styled-components'
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
`
const Style = {
  "backgroundColor" : 'red',
  width : "100%",
  "fontSize" : '15px',
  "borderRadius" : '15px',
}
const Style2 = {
  "marginTop" : "20px",
  width : '90%',
  height : '30px',
  margin : 'auto',
  "borderRadius" : '15px',
}

export default function Home() {

  const [fetchedData, setData] = useState(undefined);
  useEffect(()=> {LoadData();},[])
  const LoadData = async () => {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=daa4b9c78d874472a60150746211812&lang=fr&q=Paris")
    const data = await response.json()
    setData(data)
    console.log(data)
  }

  const Div2 = styled.div`
   animation : ${anim1} 5s;
  `
  const Div3 = styled.div`
    background-color : rgba(255,255,255, .4);
    position : absolute;
    border-radius : 15px;
    height : 50%;
    width : 70%;
    left : 15%;
    margin-top : 10px;
    display : grid;
    grid-gap : 10px;
    text-align : center;
    grid-template-rows : 1fr;
    grid-template-columns : 1fr 1fr;
    .div{
      &:hover{
      transform : scale(1.05)
      }
      transition : all .1s ease-out;
      background-color : rgba(255,255,255, .4);
      height : 90%;
      margin : 10px;
      border-radius : 15px;
    }
  `
  return (
    <>
    <div className='progress' style={Style2}>
    <Div2 className='progress-bar' style={Style}>
      Loading...
      </Div2>
    </div>
    <Div3>
    <div className='div'>{fetchedData === undefined || null ? "Loading..." : "fetchedData"}</div>
    <div className='div'>Element 2</div>
    </Div3>
    </>
  )
};
