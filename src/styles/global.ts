import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    /* background-color: #cccccc; */

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --16px: 1rem;
    --container: 1152px;
    --padding: var(--16px);
    --dropdown-color: #6b7280;
    --dropdown-text-color: #111827;
    --navbar-color: #1f2937;
    --navbar-text-color: #15803d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :is(ul, li) {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle

/* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
} */
