import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body, input, textarea, select, button, table, h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,"Apple SD Gothic Neo",sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  strong {
    font-weight: bold;
  }
`;

export default GlobalStyle;
