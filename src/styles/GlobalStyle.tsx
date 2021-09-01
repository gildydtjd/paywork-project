import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
    width: 60%;
    margin-left: 20%;
  }
`;

export default GlobalStyle;
