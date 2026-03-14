import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero w-full h-full bg-white rounded-tr-[60px] rounded-bl-[60px] overflow-hidden relative">
            <div className='px-8 py-8 xl:px-24 xl:py-12 h-auto lg:h-[15%] xl:h-[14%]   bg-black inline-flex items-center justify-center rounded-br-[60px] relative z-1'>
                <h1 className='xl:text-5xl text-3xl font-bold text-white'>Hello, I'm</h1>
                <div className='tag-right xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute bottom-[-50px] left-0 xl:bottom-[-70px] xl:left-0' />
                <div className='tag-left xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute top-0 right-[-50px] xl:top-0 xl:right-[-70px]' />
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
            <div className='absolute bottom-0 right-0 z-55 '>
                <div className='px-24 py-12 bg-black text-white inline-flex gap-4 rounded-tl-[60px] relative '>
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
                    <div className='link-tag-left w-[70px] h-[70px] bg-black absolute bottom-0 left-[-70px]'></div>
                    <div className='link-tag-right w-[70px] h-[70px] bg-black absolute top-[-70px] right-0'></div>
                </div>
            </div>
        </div>
    )

}

export default Hero