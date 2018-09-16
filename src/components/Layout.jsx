import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { theme, media } from '../theme'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileNavigation from './MobileNavigation'
import headerLogo from '../static/images/header3.png'
// import logoStrap from '../static/images/logonauha2.png'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text|Raleway');

  html, body {
    margin: 0;
    height: 100%;
    background-color: #fafafa;
    color: #1A1A1A;
    font-family: 'Raleway', sans-serif;
    line-height: 1.6;
    font-size: 15px;
  }

  button {
    font-family: 'Raleway', sans-serif;
  }

  a {
    background-color: #fafafa;
    text-decoration: none;
    color: rgb(211, 166, 2);
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-family: 'Crimson Text', serif;
  }

  ${media.desktop`
    h3 {
      font-size: 1.9rem;
    }
  `}
`

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const PageContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ${media.desktop`
    padding: 0;
  `};
`

const HeaderLogo = styled.img`
  align-self: center;
  opacity: 0.7;
  max-width: 45%;
  margin: 2rem 0;

  ${media.desktop`
    display: none;
  `};
`

const ContentContainer = styled.div`
  padding: 1.5rem 0;

  ${media.desktop`
    padding: 1.5rem;
    padding-top: 0;
  `};
`

const Layout = ({ title, children }) => (
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
            <PageContainer>
              <HeaderLogo src={headerLogo} alt="Luuppi 50 logo"/>
              <Navigation />
              <ContentContainer>{children}</ContentContainer>
            </PageContainer>
            <Footer />
          </Page>
        </ThemeProvider>
      )
    }
  />
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

Layout.defaultProps = {
  title: null,
  children: <div />,
}

export default Layout
