import { createGlobalStyle } from "styled-components";

let backgroundColor = '#2F3437';
let fontColor = '#EBEBEB'

export const GlobalStyle = createGlobalStyle`
    body { 
        color: ${fontColor};
        background-color: ${backgroundColor};
        font-family: 'Poppins', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
    }
`