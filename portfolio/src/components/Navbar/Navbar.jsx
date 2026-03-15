import React from 'react'
import * as Lucide from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { icon: Lucide.Home, label: 'Home', href: '#home' },
  { icon: Lucide.User, label: 'About', href: '#about' },
  { icon: Lucide.Zap, label: 'Skills', href: '#skills' },
  { icon: Lucide.Code2, label: 'Projects', href: '#projects' },
  { icon: Lucide.Briefcase, label: 'Experience', href: '#experience' }
]

const Navbar = () => {
  const location = useLocation()
  const hash = location.hash || ''

  return (
    <>
      <div className='hidden sm:flex gap-2 flex-col align-center h-full w-[25%] md:w-[15%] xl:w-[8%] '>
        <h1 className='w-full aspect-square flex items-center justify-center text-4xl font-bold text-center rounded-full bg-white cursor-pointer  '>Ts.</h1>
        <div className='relative h-full w-full rounded-full bg-white'>
          <div className='nav-center'>
            <div className='flex flex-col items-center justify-center'>
              {navItems.map((item) => {
                const IconComponent = item.icon;

                return (
                  <NavLink
                    to={item.href}
                    key={item.label}
                    title={item.label}
                    className={`p-2 rounded-xl group relative ${(item.href === '#home' ? !hash || hash === '#home' : hash === item.href)
                      ? 'bg-gradient-1 text-white'
                      : 'text-black'
                      }`}
                  >
                    <IconComponent className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-8 h-8 cursor-pointer " />
                    <span className='nav-tooltip absolute left-full top-1/2 -translate-y-1/2 ml-1 pl-2 pr-2 py-1 text-sm font-medium whitespace-nowrap rounded bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10'>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar  