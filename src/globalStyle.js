import {createGlobalStyle} from 'styled-components'
import {Palette} from './components/Header'


export const Global = createGlobalStyle`
body {
    overflow-x : hidden;
    scrollbar-color: ${Palette.third};
    font-family: 'Outfit', sans-serif !important;
    background-color : ${Palette.secondary};
}
`
