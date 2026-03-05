import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div className='w-full h-full bg-black rounded-tr-[60px] rounded-bl-[60px] overflow-hidden flex flex-col justify-between'>
            <div className='content flex relative w-full h-[130px] bg-white'>
                <div className=" w-[40%] h-full bg-black rounded-br-[60px] border-white  flex items-center justify-center ">
                    <h1 className='text-white text-2xl sm:text-4xl md:text-6xl font-bold'>HOME</h1>
                </div>
                <div className=" w-[60%] h-full bg-black ">
                    <div className=' rounded-tl-[60px] w-full h-full bg-white'></div>
                </div>
            </div>
            <div className="w-full flex-1 bg-black">
                <div className="hero-image relative w-full h-full bg-white rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px] md:rounded-bl-none">
                    <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2 items-start justify-end md:hidden">
                        <h1 className='gradient-1 text-3xl font-bold '>Гэрэлсайхан</h1>
                        <p className='text-black text-sm font-bold'>I'm a software engineer with a passion for building web applications.</p>
                    </div>
                </div>
            </div>
            <div className="min-h-[250px] md:h-[270px] w-full flex flex-col md:flex-row bg-white mt-4 md:mt-0 rounded-[60px] md:rounded-none ">
                <div className="hidden md:block w-[60%] h-full bg-black ">
                    <div className="w-full h-full bg-white rounded-br-[60px] p-8 flex flex-col gap-2 items-start justify-end">
                        <h1 className='gradient-1 text-3xl font-bold '>Гэрэлсайхан</h1>
                        <p className='text-black text-sm font-bold'>I'm a software engineer with a passion for building web applications.</p>
                    </div>
                </div>
                <div className="w-full md:w-[40%] h-full bg-transparent md:bg-black rounded-[60px] md:rounded-tr-none md:rounded-bl-none md:rounded-br-none md:rounded-tl-[60px] ">
                    <ul className=' text-black md:text-white text-2xl font-bold flex flex-col gap-4 items-start justify-center h-full w-full p-8'>
                        <li className='cursor-pointer hover:text-gray-500'>Facebook</li>
                        <li className='cursor-pointer hover:text-gray-500'>Instagram</li>
                        <li className='cursor-pointer hover:text-gray-500'>github</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero