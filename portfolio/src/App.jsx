import Hero from './components/Hero/Hero'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Skills from './pages/Skills/Skills'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <div className='flex h-screen bg-black gap-4 p-4 scrollbar-hide'>
      <Navbar />
      <main className='flex-1 h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide gap-8'>
        <section id='home' className='h-full snap-start snap-always w-full'>
          <Hero />
        </section>
        <section id='about' className='h-full snap-start snap-always w-full'>
          <About />
        </section>
        <section id='skills' className='h-full snap-start snap-always w-full flex items-center justify-center'>
          <Skills />
        </section>
        <section id='projects' className='h-full snap-start snap-always w-full flex items-center justify-center'>
          <Projects />
        </section>
        <section id='experience' className='h-full snap-start snap-always w-full flex items-center justify-center'>
          <Experience />
        </section>
      </main>
    </div>
  )
}

export default App