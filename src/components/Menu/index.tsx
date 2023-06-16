import menu from './menu.json'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  max-width: var(--container);
`
const Nav = styled.nav`
  display: flex;
  background-color: var(--navbar-color);
`

const DropdownMenu = styled.ul`
  position: absolute;
  /* top: -1px; */
  left: 0;
  display: none;
  flex-direction: column;
  background-color: var(--dropdown-color);
  padding: var(--padding);
`

const Wrapper = styled.div`
  position: relative;
  padding-inline: var(--padding);

  &:hover {
    ${DropdownMenu} {
      display: flex;
      flex-direction: column;
      padding: var(--padding);
    }
  }
`

const MenuItem = styled.div`
  a {
    color: var(--navbar-text-color);
  }
  padding: var(--padding);
`

const DropdownMenuItem = styled.li`
  a {
    color: var(--dropdown-text-color);
  }

  & :hover {
    background-color: #cccccc;
  }
`

export function Navbar() {
  return (
    <Container>
      <Nav>
        {menu.menu.map((menuItem, index) => {
          return (
            <Wrapper key={index}>
              <MenuItem>
                <a href={menuItem.href} target="_blank">
                  {menuItem.title}
                </a>
              </MenuItem>
              <DropdownMenu>
                {menuItem.children.map((children, index) => {
                  return (
                    <DropdownMenuItem key={index}>
                      <a href={children.href} target="_blank">
                        {children.title}
                      </a>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenu>
            </Wrapper>
          )
        })}
      </Nav>
    </Container>
  )
}
