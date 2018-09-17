import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { theme, media } from '../theme'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileNavigation from './MobileNavigation'
import headerLogo from '../static/images/header3_white.png'
// import logoStrap from '../static/images/logonauha2.png'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text|Raleway');

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
    text-decoration: underline;
    color: #0a0a0a;
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

export const Center = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  width: 1100px;
  padding: 0 5rem;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;

  ${media.mobile`
    max-width: 1100px;
    width: 100%;
    padding: 0;
  `};
`

const HeaderLogo = styled.img`
  align-self: center;
  opacity: 0.95;
  max-width: 45%;
  margin: 3rem 0 2rem 0;

  ${media.mobile`
    display: none;
  `};
`

const ContentContainer = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  box-sizing: border-box;

  ${media.mobile`
    padding: 1.5rem;
  `};
`

const Contrast = styled.div`
  background-color: ${props => props.theme.contrastBackground};
  padding-bottom: 2rem;

  ${media.mobile`
    padding: 0;
  `};
`

const Layout = ({ title, disableCenter, children }) => (
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
            <title>{title}</title>
          </Helmet>
          <MobileNavigation />

          <Contrast>
            <Center>
              <HeaderLogo src={headerLogo} alt="Luuppi 50 logo" />
              <Navigation />
            </Center>
          </Contrast>

          <ContentContainer>
            {disableCenter ? children : <Center>{children}</Center>}
          </ContentContainer>

          <Footer />
        </Page>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  title: PropTypes.string,
  disableCenter: PropTypes.bool,
  children: PropTypes.node,
}

Layout.defaultProps = {
  title: null,
  disableCenter: false,
  children: <div />,
}

export default Layout
