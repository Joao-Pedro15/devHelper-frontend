import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  :root {
    --primary: #333;
    --secondary: "#ccc";
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  img {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #214392;
  }
`