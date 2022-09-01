import { Global, css } from '@emotion/react'
import Head from 'next/head'

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
    /* border: 0;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer; */
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
`

const GlobalStyle = () => {
  return <Global styles={globalStyles} />
}

export default GlobalStyle
