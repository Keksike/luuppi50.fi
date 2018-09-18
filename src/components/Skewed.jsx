import styled from 'styled-components'
import Center from './Center'

const SkewedContrast = styled.div`
  background: ${props => props.theme.contrastBackground};
  transform: skewY(3deg);
  position: relative;
  color: ${props => props.theme.contrastText};
  z-index: 5;
  margin-top: -2rem;
  margin-bottom: 1rem;
  padding-bottom: 3rem;
  overflow: hidden;

  > ${Center} {
    transform: skewY(-3deg);
    padding: 0;
    background: inherit;
  }

  h3 {
    color: ${props => props.theme.highlight};
  }
`

const AfterSkewedContrast = styled.div`
  margin-top: -3rem;
`

export { SkewedContrast, AfterSkewedContrast }
