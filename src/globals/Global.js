import { createGlobalStyle } from "styled-components";

let backgroundColor = '#2F3437';
let fontColor = '#EBEBEB'

export const GlobalStyle = createGlobalStyle`
    body { 
        color: ${fontColor};
        background-color: ${backgroundColor};
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        margin: 0px 15px 0px 15px;
    }

    *{
        margin: 0;
        padding: 0;
    }
`