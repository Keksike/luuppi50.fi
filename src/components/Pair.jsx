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
  margin: 0 1rem;

  ${media.mobile`
    max-width: 50%;
  `};

  ${Pair}:last-child & {
    padding-bottom: 5rem;
  }

  ${media.smallMobile`
    max-width: none;
  `};
`

const Image = styled.div`
  background-image: url('https://images.unsplash.com/photo-1501255133540-c675b2234546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2dd742438e13eacdea7d6d8ac6864579&auto=format&fit=crop&w=1950&q=80');
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
