import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { StaticQuery, graphql, push } from 'gatsby'

import { theme, media, sizes } from '../theme'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileNavigation from './MobileNavigation'

import headerLogo from '../static/images/header3_white.png'
import favicon from '../static/images/favicon2.png';

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

export const Center = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  width: ${sizes.mobile}px;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1rem;

  ${media.mobile`
    width: 100%;
  `};
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
`

const Contrast = styled.div`
  background-color: ${props => props.theme.contrastBackground};
  padding-bottom: 2rem;
  transition: 250ms;

  ${media.mobile`
    padding: 0;
  `};
`

function openFrontpage() {
  return push('/')
}

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
            <html lang="fi" />
            <link rel="icon" type="image/png" href={favicon}/>
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

          <ContentContainer>{children}</ContentContainer>

          <Footer />
        </Page>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

Layout.defaultProps = {
  children: <div />,
  title: null,
}

export default Layout
