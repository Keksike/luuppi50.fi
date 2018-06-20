import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import pages from '../pages'
import { themeColors } from '../layouts/themeStyles'

const MobileWrapper = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 1.8rem;
    height: 1.5rem;
    left: 2.3rem;
    top: 2.5rem;

    .bm-burger-bars {
      background: ${themeColors.secondaryGreyDark};
    }
  }

  .bm-cross-button {
    height: 1rem;
    width: 1rem;

    .bm-cross {
      background: ${themeColors.milkyWhite};
    }
  }

  .bm-menu {
    background: ${themeColors.textBlack};
    padding: 2.5rem 1.5rem 0;
    font-size: 1.15rem;
  }

  .bm-item-list {
    padding: 0;
  }

  .bm-item {
    padding: 0.7rem;
    display: block;
    background: ${themeColors.textBlack};
    color: ${themeColors.milkyWhite};
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  display: none;

  @media (max-width: 1050px) {
    display: block;
  }

  @media (max-width: 700px) {
    .bm-burger-button {
      left: 5vw;
      top: 5vw;
    }
  }
`

class MobileNavigation extends React.Component {
  state = {
    isOpen: false
  }

  handleStateChange(state) {
    this.setState({ isOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ isOpen: false })
  }

  goToPage(page) {
    this.closeMenu()
    navigateTo(page)
  }

  handleClick = (event) => {
    event.preventDefault()

    const { to } = event.currentTarget.dataset

    this.goToPage(to)
  }

  render() {
    const { isOpen } = this.state;

    const renderNavigationLink = (page, idx) => (
      <a
        key={idx}
        href={page.link}
        data-to={page.link}
        onClick={this.handleClick}
      >
        {page.text}
      </a>
    )

    return (
      <MobileWrapper>
        <Menu isOpen={isOpen} onStateChange={state => this.handleStateChange(state)}>
          {pages.map((page, idx) => renderNavigationLink(page, idx))}
        </Menu>
     </MobileWrapper>
    )
  }
}

export default MobileNavigation
