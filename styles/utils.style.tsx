import { css } from '@emotion/react'

export const typography = {
  fontFamily: {
    inter: `'Inter', sans-serif`,
  },
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
}

export const color = {
  backMain: `var(--back-main)`,
  backSub: `var(--back-sub)`,
  line: `var(--line)`,
  textPrimary: `var(--text-primary)`,
  textSecondary: `var(--text-secondary)`,
  blue: `var(--highlight)`,
}
