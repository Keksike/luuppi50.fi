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

import headerLogo from '../static/images/header3.png'
import favicon from '../static/images/favicon2.png'
import logonauha from '../static/images/logonauha2.png'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    height: 100%;
    background-color: ${theme.background};
    color: ${theme.text};
    font-family: 'Raleway', sans-serif;
    line-height: 1.6;
    font-size: 17px;

    &::before {
      content: '';
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 2;
      opacity: 0.2;
      background-image: url(${logonauha});
    }
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
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  z-index: 5;
`

const RoutesContainer = posed.div({})

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

              <Center>
                <HeaderLogo
                  src={headerLogo}
                  alt="Luuppi 50"
                  onClick={openFrontpage}
                />
                <Navigation />
              </Center>

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
