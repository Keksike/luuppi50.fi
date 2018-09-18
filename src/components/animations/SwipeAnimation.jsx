import React from 'react'
import styled, { keyframes } from 'styled-components'

const swipeOut = keyframes`
  0% {
    transform: translate3d(-100vw, 0, 0);
  }

  35% {
    transform: translate3d(0vw, 0, 0);
  }

  65% {
    transform: translate3d(0vw, 0, 0);
  }

  100% {
    transform: translate3d(300vw, 0, 0);
  }
`
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  pointer-events: none;
  transform: translate3d(0vw, 0, 0);
  animation: ${swipeOut} 750ms ease-in-out 0ms forwards;
  background-color: black;
`

const Child = styled.div`
  height: 150vh;
`

const Skew = styled.div`
  display: block;
  height: 200vh;
  margin-bottom: -200vh;
  transform: skewY(-7deg);
  transform-origin: bottom left;
`

const SwipeAnimation = () => (
  <Wrapper>
    <Skew />
    <Child />
    <Skew />
  </Wrapper>
)

export default SwipeAnimation
