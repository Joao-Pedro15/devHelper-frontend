import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    background-color: #fdfd;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
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