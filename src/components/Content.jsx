import styled from 'styled-components'
import { media } from '../theme'

const Content = styled.div`
  padding: 0 4rem;

  ${media.mobile`
    padding: 0 1.5rem;
  `};
`

export default Content
