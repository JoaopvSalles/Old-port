import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  :target {
    scroll-margin-top: 12rem;
  }

  :root {
    --white: #ffffff;

    --pink: pink;

    --gray-200: #c4c4c4;
    --gray-700: #282a36;
    
    --blue-400: #5E608A;
    --blue-500: #252BB0;
    --blue-700: #383a59;

    --green-300: #50fa7b;

    --cyan: #8BE9FD
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: var(--gray-700);

    font-family: 'Roboto', sans-serif;
  }
`