import styled from 'styled-components'

import { media } from '../theme'

const Pair = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 4rem;
  }

  &:last-child {
    margin-bottom: -5rem;
  }

  ${media.smallMobile`
    flex-wrap: wrap;
  `};
`

const Text = styled.div`
  padding: 2rem 0;
  min-width: 60%;
  margin-right: 2rem;
  ${media.mobile`
    max-width: 50%;
  `};

  ${media.smallMobile`
    max-width: none;
  `};
`

const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 50rem;
  margin: 0 1rem;

  ${media.mobile`
    margin: 0;
  `};

  ${media.smallMobile`
    width: 100%;
    height: 20rem;
    order: -1;
    margin-top: -1rem;
  `};
`

export { Pair, Text, Image }
