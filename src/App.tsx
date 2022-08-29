import { About } from './pages/About'
import { Footer } from './pages/Footer'
import { Header } from './pages/Header'
import { Projects } from './pages/Projects'
import { Techs } from './pages/Techs'
import { Start } from './pages/Start'

import { GlobalStyle } from './global'

alert('⚠ PORTIFOLIO EM CONSTRUÇÂO! ⚠')

export function App() {
  return (
    <>
      <Header />
      <Start />
      <About />
      <Projects />
      <Techs />
      <Footer />
      
      <GlobalStyle />
    </>
  )
}
