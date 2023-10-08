import { createGlobalStyle } from 'styled-components'

interface Props {
  FontFamily?: string
}

const GlobalStyle = createGlobalStyle<Props>`
:root {
  --font-active: ${({ FontFamily }) => FontFamily || 'sans-serif'};
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-active);
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`

export default GlobalStyle
