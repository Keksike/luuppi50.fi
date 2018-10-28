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
  padding: 0 1rem;

  ${media.mobile`
    width: 100%;
  `};

  ${media.smallMobile`
    padding: 0;
  `};
`

export default Center
