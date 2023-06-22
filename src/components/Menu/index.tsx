import { useState, MouseEvent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  width: 60%;
  max-width: var(--container);
`
const Nav = styled.nav`
  padding: 32px;
  min-height: 72px;
  box-shadow: 0 16px 8px var(--grey);
`

const Menu = styled.ul`
  display: flex;
  gap: 16px;
`

const MenuItem = styled.li`
  position: relative;
  padding-inline: 32px;

  &:hover {
    ul {
      display: flex;
    }
  }
`

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;

  display: none;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  width: 100%;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 8px 8px var(--grey);
`

const DropdownMenuItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 8px 16px;

  &:hover {
    background-color: var(--grey);
  }
`

interface MenuItem {
  title: string
  href: string
  children: {
    title: string
    href: string
  }[]
}
interface NavbarProps {
  menuItems: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function handleMouseOver() {
    setIsDropdownOpen(true)
  }

  function handleMouseLeave() {
    setIsDropdownOpen(false)
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    window.location.href = href
  }

  return (
    <Nav>
      <Container>
        <Menu>
          {menuItems.map((menuItem, index) => {
            return (
              <MenuItem
                key={index}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={menuItem.href}
                  onClick={(e) => handleClick(e, menuItem.href)}
                >
                  {menuItem.title}
                </a>
                {menuItem.children && isDropdownOpen && (
                  <DropdownMenu>
                    {menuItem.children.map((children, index) => {
                      return (
                        <DropdownMenuItem key={index}>
                          <a
                            href={children.href}
                            onClick={(e) => handleClick(e, children.href)}
                          >
                            {children.title}
                          </a>
                        </DropdownMenuItem>
                      )
                    })}
                  </DropdownMenu>
                )}
              </MenuItem>
            )
          })}
        </Menu>
      </Container>
    </Nav>
  )
}
