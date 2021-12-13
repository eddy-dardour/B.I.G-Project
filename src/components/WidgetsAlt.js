 import React from 'react'
import styled from 'styled-components'
 export default function WidgetsAlt() {
     return (
         <Background>
        <WidgetDiv>
         </WidgetDiv>
         </Background>
     )
 }
 
const WidgetDiv = styled.div`

`
const Background = styled.body`
    backdrop-filter : blur(1200px);
    background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);
    width :100%;
    max-height: 1200px;
    min-height : 100%;
    height : 1000px;
`