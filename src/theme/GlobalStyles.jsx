import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { poppins } from './fonts';

const url = '/images/bg-light.jpg';
//const url = '/images/bg-1.png';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${poppins.fontFamily};
    font-weight: ${poppins.fontWeights[400]};
  }

  body {
    background: radial-gradient(at 47% 33%, hsl(268.36, 100%, 89%) 0, transparent 59%),
                radial-gradient(at 82% 65%, hsl(300.00, 100%, 96%) 0, transparent 55%);
    background-image: url(${url});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    // backdrop-filter: blur(10px);
  }
`;

const GlobalStylesComponent = () => <GlobalStyles />;

export default GlobalStylesComponent;
