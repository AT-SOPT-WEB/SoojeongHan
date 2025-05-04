import { css } from '@emotion/react';
import reset from 'emotion-reset';

const globalStyle = css`
  ${reset}

  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    
    font-size: 62.5%;
    box-sizing: border-box;

  }

`;

export default globalStyle;
