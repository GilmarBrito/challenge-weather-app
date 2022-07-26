import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #4276c9;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
    
    h1,h2, h3,h4,h5,p {
        margin: 0;
    }

    li, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        max-width: 150px;
        width: 100%;
        height: 40px;
        cursor: pointer;
        border: none;
        background-color: #3c91e6;
        border-radius: 4px;
    }
`;

export default GlobalStyle;
