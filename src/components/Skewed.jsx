import styled from 'styled-components'
import { Center } from './Layout'

const SkewedContrast = styled.div`
  background: ${props => props.theme.contrastBackground};
  transform: skewY(3deg);
  position: relative;
  color: ${props => props.theme.contrastText};
  z-index: 100;
  padding-bottom: 3rem;
  overflow: hidden;
  margin-top: 3rem;
  margin-bottom: 6rem;

  > ${Center} {
    transform: skewY(-3deg);
    padding: 0;
  }

  h3 {
    color: ${props => props.theme.highlight};
  }
`

const AfterSkewedContrast = styled.div`
  margin-top: -3rem;
`

export { SkewedContrast, AfterSkewedContrast }
