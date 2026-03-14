import React from 'react'
import * as Lucide from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  {
    icon: Lucide.Home,
    label: 'Home',
    href: '/'
  },
  {
    icon: Lucide.User,
    label: 'About',
    href: '/about'
  },
  {
    icon: Lucide.Zap,
    label: 'Projects',
    href: '/projects'
  },
  {
    icon: Lucide.Code2,
    label: 'Skills',
    href: '/skills'
  },
  {
    icon: Lucide.Briefcase,
    label: 'Experience',
    href: '/experience'
  }
]

const Navbar = () => {

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
                    className={({ isActive }) =>
                      `p-2 rounded-xl ${isActive ? 'bg-gradient-1 text-white' : 'text-gray-500'}`
                    }
                  >
                    <IconComponent className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-8 h-8 cursor-pointer " />
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