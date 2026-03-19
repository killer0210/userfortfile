import React from 'react'
import * as Lucide from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'React + Tailwind deer hiisen personal portfolio web.',
    stack: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/your-username/portfolio',
    live: 'https://your-portfolio.com',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Task Manager App',
    description: 'JWT auth, CRUD, dashboard-tai task management system.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/your-username/task-manager',
    live: 'https://task-manager-demo.com',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-commerce UI',
    description: 'Responsive product listing, filter, cart flow buhii UI.',
    stack: ['React', 'Redux', 'Tailwind'],
    github: 'https://github.com/your-username/ecommerce-ui',
    live: 'https://ecommerce-ui-demo.com',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
  },
]

const Projects = () => {
  return (
    <section className='h-full w-full snap-start snap-always'>
      <div className='h-full w-full bg-white rounded-[60px]'>
        <div className='px-8 py-8 xl:px-24 xl:py-12 h-auto lg:h-[15%] xl:h-[14%] bg-black inline-flex items-center justify-center rounded-br-[60px] relative'>
          <h1 className='xl:text-5xl text-3xl font-bold text-white'>Projects</h1>
          <div className='tag-right xl:h-[70px] xl:w-[70px] h-[50px] w-[50px] bg-black absolute bottom-[-50px] left-0 xl:bottom-[-70px]' />
          <div className='tag-left xl:h-[70px] xl:w-[70px] h-[50px] w-[50px] bg-black absolute top-0 right-[-50px] xl:right-[-70px]' />
        </div>

        <div className='px-6 md:px-10 xl:px-16 py-8 md:py-10 h-[calc(100%-120px)] overflow-y-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {projects.map((project) => (
              <article
                key={project.title}
                className='bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden'
              >
                <img src={project.image} alt={project.title} className='w-full h-44 object-cover' />

                <div className='p-5'>
                  <h3 className='text-xl font-bold text-gray-900'>{project.title}</h3>
                  <p className='mt-2 text-gray-600 text-sm leading-6'>{project.description}</p>

                  <div className='mt-4 flex flex-wrap gap-2'>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className='px-2.5 py-1 text-xs font-medium rounded-md bg-orange-100 text-orange-700'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='mt-5 flex items-center gap-3'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800 transition'
                    >
                      <Lucide.Github size={16} />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500 text-white text-sm hover:bg-orange-600 transition'
                    >
                      <Lucide.ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
