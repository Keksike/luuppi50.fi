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
import backgroundPattern from '../static/images/luuppi3.jpg'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html, body {
    margin: 0;
    background-color: ${theme.background};
    color: ${theme.text};
    font-family: 'Raleway', sans-serif;
    line-height: 1.6;
    font-size: 17px;
  }

  body {
    background-image: url(${backgroundPattern});
    background-size: 100% auto;
    background-attachment: fixed;
  }

  button {
    font-family: 'Raleway', sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: ${theme.contrastHighlight}
    }
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2.2rem;
    font-family: 'Crimson Text', serif;
  }

  h4 {
    font-family: 'Crimson Text', serif;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
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
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
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
    margin: 1rem 1rem;
    max-width: none;
  `};
`

const ContentContainer = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
`

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
  },
  exit: {
    opacity: 0,
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
            <Center>
              <Page>
                <Helmet
                  titleTemplate={`%s - ${data.site.siteMetadata.title}`}
                  defaultTitle={data.site.siteMetadata.title}
                >
                  <html lang="fi" />
                  <link rel="icon" type="image/png" href={favicon} />
                </Helmet>

                <MobileNavigation />

                <HeaderLogo
                  src={headerLogo}
                  alt="Luuppi 50"
                  onClick={openFrontpage}
                />

                <Navigation />

                <ContentContainer>
                  <PoseGroup>
                    <RoutesContainer key={location.key}>
                      {children}
                    </RoutesContainer>
                  </PoseGroup>
                </ContentContainer>

                <Footer />
              </Page>
            </Center>
          </ThemeProvider>
        )}
      />
    )
  }
}

export default Layout
