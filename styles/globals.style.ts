import { css } from '@emotion/react'

export const globalStyles = css`
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
  body {
    --bg-main: #ffffff;
    --bg-sub: #f8fafb;
    --line: #e1e4e6;
    --text-primary: #363a3c;
    --text-secondary: #878d91;
    --highlight: #4c80f1;
    --shadow-light: rgba(54, 58, 60, 0.05);
    --shadow-dark: rgba(54, 58, 60, 0.1);
  }

  body.dark {
    --bg-main: #202124;
    --bg-sub: #303134;
    --line: #3c4043;
    --text-primary: #ced0d5;
    --text-secondary: #969ba1;
    --highlight: #8ab4f8;
    --shadow-light: rgba(255, 255, 255, 0.05);
    --shadow-dark: rgba(255, 255, 255, 0.1);
  }

  html,
  body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  html {
    scroll-snap-type: y mandatory;
  }
`
