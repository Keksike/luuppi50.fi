import React from 'react'
import { push } from 'gatsby'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import pages from '../pages'
import { media } from '../theme'

const MobileWrapper = styled.div`
  display: none;

  ${media.mobile`
    display: block;
  `};

  a {
    text-decoration: none;
  }
`

const MenuStyleWrapper = styled.div`
  .bm-burger-button {
    position: absolute;
    width: 1.8rem;
    height: 1.5rem;
    right: 2.22rem;
    top: 2.22rem;

    .bm-burger-bars {
      background: ${props => props.theme.contrastText};
    }
  }

  .bm-cross-button {
    height: 1rem;
    width: 1rem;

    .bm-cross {
      background: ${props => props.theme.contrastText};
    }
  }

  .bm-menu {
    background: ${props => props.theme.contrastBackground};
    padding: 2.5rem 1.5rem 0;
    font-size: 1.15rem;
  }

  .bm-item-list {
    padding: 0;
  }

  .bm-item {
    padding: 0.7rem;
    display: block;
    background: ${props => props.theme.contrastBackground};
    color: ${props => props.theme.contrastText};
    font-family: 'Crimson Text', serif;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.5) !important;
  }
`

class MobileNavigation extends React.Component {
  state = {
    isOpen: false,
  }

  handleClick = event => {
    event.preventDefault()

    const { to } = event.currentTarget.dataset

    this.goToPage(to)
  }

  goToPage(page) {
    this.closeMenu()
    push(page)
  }

  handleStateChange(state) {
    this.setState({ isOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state

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
        <MenuStyleWrapper>
          <Menu
            right
            isOpen={isOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            {pages.map((page, idx) => renderNavigationLink(page, idx))}
          </Menu>
        </MenuStyleWrapper>
      </MobileWrapper>
    )
  }
}

export default MobileNavigation
