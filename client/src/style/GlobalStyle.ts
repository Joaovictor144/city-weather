import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
  :root{
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }

  body {
    margin: 0;
    display: flex;
    min-width: 320px;
    min-height: 100vh;
  }

  #root {

    margin: 0 auto;
    padding: 2rem;
  }
`;