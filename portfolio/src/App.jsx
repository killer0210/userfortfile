import Hero from './components/Hero/Hero'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Skills from './pages/Skills/Skills'

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
        <section id='skills' className='min-h-screen snap-start snap-always w-full flex items-center justify-center'>
          <Skills />
        </section>
        <section id='projects' className='min-h-screen snap-start snap-always w-full flex items-center justify-center'>
          <div className='text-white text-xl font-semibold'>Projects</div>
        </section>
        <section id='experience' className='min-h-screen snap-start snap-always w-full flex items-center justify-center'>
          <div className='text-white text-xl font-semibold'>Experience</div>
        </section>
      </main>
    </div>
  )
}

export default App