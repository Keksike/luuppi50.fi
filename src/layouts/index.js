import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import './index.css'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-top: 0;
  height: 100vh;
  display: flex;
`;

const Layout = ({ children, data }) => (
  <PageContainer>
    <Helmet title={data.site.siteMetadata.title}/>
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <ContentContainer>
      {children()}
    </ContentContainer>
  </PageContainer>
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
