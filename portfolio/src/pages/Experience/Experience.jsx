import React from 'react'
import * as Lucide from 'lucide-react'

const experienceData = [
  {
    role: 'Frontend Developer',
    company: 'Freelance / Personal Projects',
    period: '2024 - Present',
    type: 'Remote',
    summary:
      'Built responsive and user-focused web interfaces with reusable components and clean UI patterns.',
    highlights: [
      'Developed portfolio and dashboard UIs with React and Tailwind CSS.',
      'Improved mobile responsiveness and component consistency across pages.',
      'Integrated APIs and handled loading/error states for better UX.',
    ],
    stack: ['React', 'Tailwind', 'JavaScript'],
  },
  {
    role: 'Backend Developer',
    company: 'Academic / Practice Projects',
    period: '2023 - 2024',
    type: 'Hybrid',
    summary:
      'Implemented REST APIs and database models for full-stack applications with a focus on maintainability.',
    highlights: [
      'Created authentication and role-based access flows using JWT.',
      'Designed CRUD endpoints with validation and error handling.',
      'Worked with MongoDB schemas and query optimization basics.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Full Stack Learner',
    company: 'Self-Learning Track',
    period: '2022 - 2023',
    type: 'Learning',
    summary:
      'Built hands-on projects to strengthen end-to-end product thinking, development workflow, and debugging.',
    highlights: [
      'Built mini products from idea to deployment.',
      'Practiced Git flow, project structuring, and clean code principles.',
      'Learned to ship MVPs quickly and iterate from feedback.',
    ],
    stack: ['React', 'Node.js', 'SQL'],
  },
]

const Experience = () => {
  return (
    <section className='h-full w-full snap-start snap-always'>
      <div className='h-full w-full bg-white rounded-[60px]'>
        <div className='px-8 py-8 xl:px-24 xl:py-12 h-auto lg:h-[15%] xl:h-[14%]   bg-black inline-flex items-center justify-center rounded-br-[60px] relative z-1'>
          <h1 className='xl:text-5xl text-3xl font-bold text-white'>Skills</h1>
          <div className='tag-right xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute bottom-[-50px] left-0 xl:bottom-[-70px] xl:left-0' />
          <div className='tag-left xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute top-0 right-[-50px] xl:top-0 xl:right-[-70px]' />
        </div>

        <div className='px-6 md:px-10 xl:px-16 py-8 md:py-10 h-[calc(100%-120px)] overflow-y-auto'>
          <div className='space-y-5'>
            {experienceData.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className='border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-3'>
                  <div>
                    <h3 className='text-xl md:text-2xl font-bold text-gray-900'>{item.role}</h3>
                    <p className='text-gray-700 font-medium mt-1'>{item.company}</p>
                  </div>
                  <div className='flex flex-col md:items-end text-sm text-gray-500'>
                    <span className='inline-flex items-center gap-2'>
                      <Lucide.CalendarDays size={16} />
                      {item.period}
                    </span>
                    <span className='inline-flex items-center gap-2 mt-1'>
                      <Lucide.MapPin size={16} />
                      {item.type}
                    </span>
                  </div>
                </div>

                <p className='mt-4 text-gray-600 leading-7'>{item.summary}</p>

                <ul className='mt-4 space-y-2'>
                  {item.highlights.map((line) => (
                    <li key={line} className='flex gap-2 text-gray-700'>
                      <Lucide.CheckCircle2 size={18} className='text-orange-500 shrink-0 mt-0.5' />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className='px-2.5 py-1 text-xs font-medium rounded-md bg-orange-100 text-orange-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
