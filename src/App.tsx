import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Start } from './components/Start'

import { GlobalStyle } from './global'

export function App() {
  return (
    <>
      <Header />
      <Start />
      <About />
      <Projects />
      <Skills />
      <Footer />
      
      <GlobalStyle />
    </>
  )
}
