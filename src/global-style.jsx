import { createGlobalStyle } from "styled-components";

export const globalVar = {
    backgroundColor: "#252525",
    fontColor: "#EBEBEB"
}


export const Global = createGlobalStyle`
    body{
        background: ${globalVar.backgroundColor}
    }
    
    *{
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        color: ${globalVar.fontColor};

        text-decoration: none;
    }
`