import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import MobileNavigation from '../components/MobileNavigation';
// import logoStrap from '../static/images/logonauha2.png'

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

  @media (max-width: 700px) {
    padding: 5vw;
  }
`

const ContentContainer = styled.div`
  padding: 1.5rem 1.5rem;
`

const Layout = ({ children, data }) => (
  <Page>
    <Helmet title={data.site.siteMetadata.title} />
    <MobileNavigation />
    <PageContainer>
      <Navigation />
      <ContentContainer>
        {children()}
      </ContentContainer>
    </PageContainer>
    <Footer />
  </Page>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
