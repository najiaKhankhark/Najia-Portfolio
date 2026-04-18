import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import { ExternalLink } from 'lucide-react'
import Experience from './Pages/Experience'
import ContactPage from './Pages/Contact'

const App = () => {
  return (
      <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      <Navbar />

      <header id="home" className="h-screen snap-start scroll-mt-24">
        <Hero />
      </header>

      <main>
        <section id='about' className="h-screen snap-start scroll-mt-24">
          <About/>
        </section>

        <section id='skills' className="h-screen snap-start scroll-mt-24">
          <Skills />
        </section>

        <section id='experience' className="h-screen snap-start scroll-mt-24">
          <Experience/>
        </section>


      </main>

        <footer id='contact' className="h-screen snap-start scroll-mt-24">
          <ContactPage/>
        </footer>

      
    </div>
  )
}

export default App
