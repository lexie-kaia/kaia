import { Global, css } from '@emotion/react'

const globalStyles = css`
  /* reset */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  input {
    /* border: 0;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit; */
  }

  textarea {
    /* border: 0;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    resize: none; */
  }

  select {
    /* border: 0;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit; */
  }

  fieldset {
    border: 0;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    /* color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  /* global */

  html,
  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-size: 16px;
    line-height: 1.5;
  }

  html {
    scroll-snap-type: y mandatory;
  }

  body {
    --back-main: #ffffff;
    --back-sub: #f8fafb;
    --line: #e1e4e6;
    --text-primary: #363a3c;
    --text-secondary: #878d91;
    --highlight: #4c80f1;
  }

  body.dark {
    --back-main: #202124;
    --back-sub: #303134;
    --line: #3c4043;
    --text-primary: #ced0d5;
    --text-secondary: #969ba1;
    --highlight: #8ab4f8;
  }
`

const GlobalStyle = () => {
  return <Global styles={globalStyles} />
}

export default GlobalStyle
