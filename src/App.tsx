import GlobalStyles from './styles/global'
import { menu as menuItems } from './assets/menu.json'
import { Navbar } from './components/Menu'

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar menuItems={menuItems} />
    </>
  )
}

export default App
