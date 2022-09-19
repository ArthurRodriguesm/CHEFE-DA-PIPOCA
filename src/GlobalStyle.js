import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ::selection{
        background-color: #808080;
    }
    body{
        background: #FFC639;
    }
    *{
        margin: 0px;
        padding: 0px;
    }
`