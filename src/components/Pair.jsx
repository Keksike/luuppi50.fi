import styled from 'styled-components'

import { media } from '../theme'

const Pair = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 2rem;
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
  background-image: url('https://comic-news.com/wp-content/uploads/2017/05/99a2ea397db015a4d30362f16151ff73.jpg');
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
