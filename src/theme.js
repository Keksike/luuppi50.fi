import { css } from 'styled-components'

export const theme = {
  error: '#ce1010',

  text: '#0a0a0a',
  contrastText: '#0a0a0a',
  contrastHighlight: '#e0b400',

  background: '#fff',
  contrastBackground: '#f4f4f4',

  highlight: '#0a0a0a',
}

export const sizes = {
  mobile: 1100,
  smallMobile: 700,
}

/*
 * https://web.archive.org/web/20180914172900/https://www.styled-components.com/docs/advanced#media-templates
 */
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})
