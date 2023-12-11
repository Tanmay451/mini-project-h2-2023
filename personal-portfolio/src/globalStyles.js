// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

// Import your background image
import backgroundImage from './img/73e20286-048a-426d-bb6d-c8aa5cbcf5b3.JPG';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  .pageWrapper {
    // background: url(${backgroundImage}) center/cover no-repeat fixed;
  }
`;

export default GlobalStyle;