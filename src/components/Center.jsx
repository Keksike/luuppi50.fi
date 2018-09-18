import styled from 'styled-components'

import { sizes, media } from '../theme'

const Center = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  width: ${sizes.mobile}px;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 3rem;
  background: ${props => props.theme.background};
  z-index: 2;

  ${media.mobile`
    width: 100%;
  `};
`

export default Center
