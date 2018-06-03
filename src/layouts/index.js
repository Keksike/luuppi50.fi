import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import Navigation from '../components/Navigation'
// import logoStrap from '../static/images/logonauha2.png'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
`

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div`
  padding: 1.5rem 1rem;
`

const Layout = ({ children, data }) => (
  <Page>
    <Helmet title={data.site.siteMetadata.title} />
    <PageContainer>
      <Navigation />
      <ContentContainer>
        {children()}
      </ContentContainer>
    </PageContainer>
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
