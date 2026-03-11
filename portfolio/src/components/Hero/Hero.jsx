import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero w-full h-full bg-white rounded-tr-[60px] rounded-bl-[60px] overflow-hidden relative">
            <div className='px-24 py-12 bg-black inline-flex rounded-br-[60px] relative z-1'>
                <h1 className='text-5xl font-bold text-white'>Hello, I'm</h1>
                <div className='tag-right h-[70px] w-[70px]  bg-black z-10 absolute bottom-[-70px] left-0' />
                <div className='tag-left h-[70px] w-[70px]  bg-black z-10 absolute top-0 right-[-70px]' />
            </div>
            <div className='hero-image w-full h-screen z-[-1] '></div>
            <div className='absolute bottom-0 left-0 px-24 py-12'>
                <h1 className='text-4xl font-bold'>I'm a <span className='gradient-1'>Software Engineer</span></h1>
                <p className='text-lg text-gray-500'>I'm a software engineer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.</p>
                {/* <div className='flex gap-4'>
                    <button className='bg-black text-white px-4 py-2 rounded-md'>Download CV</button>
                    <button className='bg-black text-white px-4 py-2 rounded-md'>Contact Me</button>
                </div> */}
            </div>
            <div className='absolute bottom-0 right-0 px-24 py-12 z-55 bg-black text-white inline-flex gap-4 rounded-tl-[60px]'>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <a href="#" className='flex items-center gap-2'>
                            <i className='fa-brands fa-linkedin text-white text-2xl'></i>
                            <span className='text-white text-lg'>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center gap-2'>
                            <i className='fa-brands fa-github text-white text-2xl'></i>
                            <span className='text-white text-lg'>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center gap-2'>
                            <i className='fa-brands fa-twitter text-white text-2xl'></i>
                            <span className='text-white text-lg'>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center gap-2'>
                            <i className='fa-brands fa-facebook text-white text-2xl'></i>
                            <span className='text-white text-lg'>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center gap-2'>
                            <i className='fa-brands fa-whatsapp text-white text-2xl'></i>
                            <span className='text-white text-lg'>WhatsApp</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Hero