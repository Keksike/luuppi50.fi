import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { StaticQuery, graphql, push } from 'gatsby'
import posed, { PoseGroup } from 'react-pose'

import { theme, media } from '../theme'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import MobileNavigation from '../components/MobileNavigation'
import Center from '../components/Center'
import SwipeAnimation from '../components/animations/SwipeAnimation'

import headerLogo from '../static/images/header3_white.png'
import favicon from '../static/images/favicon2.png'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html, body {
    margin: 0;
    height: 100%;
    background-color: ${theme.background};
    color: ${theme.text};
    font-family: 'Raleway', sans-serif;
    line-height: 1.6;
    font-size: 17px;
  }

  button {
    font-family: 'Raleway', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${theme.highlight};

    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2.2rem;
    font-family: 'Crimson Text', serif;
  }

  ${media.mobile`
    h3 {
      font-size: 1.7rem;
    }
  `}
`

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const HeaderLogo = styled.img`
  align-self: center;
  opacity: 0.95;
  max-width: 45%;
  margin: 3rem 0 2rem 0;

  ${media.mobile`
    align-self: flex-start
    width: 155px;
    opacity: 0.95;
    margin: 1rem 0;
    max-width: none;
  `};
`

const ContentContainer = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
`

const Contrast = styled.div`
  background-color: ${props => props.theme.contrastBackground};
  padding-bottom: 2rem;
  transition: 250ms;
  z-index: 15;

  ${media.mobile`
    padding: 0;
  `};
`

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 350,
  },
  exit: {
    opacity: 0,
    delay: 300,
  },
})

function openFrontpage() {
  return push('/')
}

// eslint-disable-next-line
class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.shape({
      key: PropTypes.string.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    children: <div />,
  }

  render() {
    const { location, children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <Page>
              <Helmet
                titleTemplate={`%s - ${data.site.siteMetadata.title}`}
                defaultTitle={data.site.siteMetadata.title}
              >
                <html lang="fi" />
                <link rel="icon" type="image/png" href={favicon} />
              </Helmet>

              <MobileNavigation />

              <Contrast>
                <Center>
                  <HeaderLogo
                    src={headerLogo}
                    alt="Luuppi 50"
                    onClick={openFrontpage}
                  />
                  <Navigation />
                </Center>
              </Contrast>

              <SwipeAnimation key={location.key} />

              <ContentContainer>
                <PoseGroup>
                  <RoutesContainer key={location.key}>
                    {children}
                  </RoutesContainer>
                </PoseGroup>
              </ContentContainer>

              <Footer />
            </Page>
          </ThemeProvider>
        )}
      />
    )
  }
}

export default Layout
