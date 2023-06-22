import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    /* https://colorhunt.co/palette/f7f7f7eeeeee393e46929aab */
    --white: #f7f7f7;
    --grey: #eeeeee;
    --black: #393e46;
    --cream: #929aab;
    
    color-scheme: light dark;
    color: var(--black);
    background-color: var(--white);
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
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
    color: var(--black);
    text-decoration: none;
  }
`

export default GlobalStyle
