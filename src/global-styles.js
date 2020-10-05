import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #000000;
      color: #333333;
      font-size: 16px;
      }
       input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 50px white inset; 
    -webkit-text-fill-color: #333;
}

    input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
} 
  #center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #margin-left {
    margin-left: 6%;
  }
\`;
`