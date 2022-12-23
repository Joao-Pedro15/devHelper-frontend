import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  :root {
    --primary: #333;
    --secondary: "#ccc";
  }

  html, body {
    width: 100%;
    height: 100vh;
  }

  img {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  h1 {
    font-size: 2.5rem;
  }

  a {
    text-decoration: none;
    color: #214392;
  }
`