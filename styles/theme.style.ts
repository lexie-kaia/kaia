import { css } from '@emotion/react'

export const theme = {
  color: {
    bgMain: `var(--bg-main)`,
    bgSub: `var(--bg-sub)`,
    line: `var(--line)`,
    textPrimary: `var(--text-primary)`,
    textSecondary: `var(--text-secondary)`,
    blue: `var(--highlight)`,
    shadowLight: `var(--shadow-light)`,
    shadowDark: `var(--shadow-dark)`,
  },
  boxShadow: {
    light: `0 3px 5px var(--shadow-light), 0 0 10px var(--shadow-light)`,
    dark: `0 3px 5px var(--shadow-dark), 0 0 10px var(--shadow-dark)`,
  },
  typography: {
    fontFamily: {
      spoqa: `'Spoqa Han Sans Neo', sans-serif`,
      inter: `'Inter', sans-serif`,
    },
    fontSize: {
      h1: css`
        font-size: 2rem; // 32px
        line-height: 2.5rem; // 40px
      `,
      h2: css`
        font-size: 1.75rem; // 28px
        line-height: 2.25rem; // 36px
      `,
      h3: css`
        font-size: 1.375rem; // 22px
        line-height: 1.75rem; // 28px
      `,
      large: css`
        font-size: 1.25rem; // 20px
        line-height: 2rem; // 32px
      `,
      regular: css`
        font-size: 1rem; // 16px
        line-height: 1.5rem; // 24px
      `,
      small: css`
        font-size: 0.875rem; // 14px
        line-height: 1.25rem; // 20px
      `,
      tiny: css`
        font-size: 0.75rem; // 12px
        line-height: 1rem; // 16px
      `,
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      extrabold: '800',
    },
  },
}
