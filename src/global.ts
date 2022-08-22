import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  :root {
    --white: #ffffff;

    --gray-700: #282a36;
    
    --blue-700: #383a59;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
`