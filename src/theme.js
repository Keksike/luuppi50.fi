import { css } from 'styled-components'

export const theme = {
  white: '#fff',
  milkyWhite: '#fafafa',
  textBlack: '#1A1A1A',
  secondaryGreyDark: '#54585a',
  secondaryGrey: '#707372',
  secondaryGreyLight: '#898d8d',
  secondaryGreyLighter: '#9ea2a2',
  secondaryGreyLightest: '#e7e8e8',
  error: '#ce1010',
}

export const sizes = {
  desktop: 1050,
}

/*
 * https://web.archive.org/web/20180914172900/https://www.styled-components.com/docs/advanced#media-templates
 */
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})