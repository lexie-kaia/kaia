import '@emotion/react'
import { css } from '@emotion/react'

type CSS = css

declare module '@emotion/react' {
  export interface Theme {
    color: {
      bgMain: string
      bgSub: string
      line: string
      textPrimary: string
      textSecondary: string
      blue: string
      shadowLight: string
      shadowDark: string
    }
    boxShadow: {
      light: string
      dark: string
    }
    typography: {
      fontFamily: {
        spoqa: string
        inter: string
      }
      fontSize: {
        h1: CSS
        h2: CSS
        h3: CSS
        large: CSS
        regular: CSS
        small: CSS
        tiny: CSS
      }
      fontWeight: {
        light: string
        regular: string
        medium: string
        bold: string
        extrabold: string
      }
    }
  }
}
