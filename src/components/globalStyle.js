import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://use.typekit.net/omg2dtu.css");
  :root {
    --primary-color: #ed1f24;
    --white: #FFFAFF;
    --grey: #3b3b3b;
    --black: #141414;
    --box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
    --speed: 500ms; 
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: muli, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
  }

  a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
`;
