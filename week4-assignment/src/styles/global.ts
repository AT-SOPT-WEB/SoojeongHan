import { css } from '@emotion/react';
import Reset from 'emotion-reset';

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  select {
    background: #fff;
  }

  #root {
    background-color: #fff;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;