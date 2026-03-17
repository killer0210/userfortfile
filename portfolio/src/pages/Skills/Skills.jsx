import React from 'react'
import * as Lucide from 'lucide-react'

const Skills = () => {
    return (
        <section id='skills' className='h-full w-full snap-start snap-always'>
            <div className='h-full w-full bg-white rounded-[60px] '>
                <div className='px-8 py-8 xl:px-24 xl:py-12 h-auto lg:h-[15%] xl:h-[14%]   bg-black inline-flex items-center justify-center rounded-br-[60px] relative z-1'>
                    <h1 className='xl:text-5xl text-3xl font-bold text-white'>Skills</h1>
                    <div className='tag-right xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute bottom-[-50px] left-0 xl:bottom-[-70px] xl:left-0' />
                    <div className='tag-left xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute top-0 right-[-50px] xl:top-0 xl:right-[-70px]' />
                </div>
                <div className='w-full h-full flex items-center justify-center px-8'>
                    <div className='flex md:flex-row flex-col gap-8 w-full mx-auto mb-12 '>
                        <div className='p-4 bg-white rounded-xl shadow-lg flex-1'>
                            <div className='flex items-center gap-2'>
                                <div className='p-2 bg-orange-600 rounded-md inline-block'><Lucide.Monitor className='text-2xl text-white' /></div>
                                <h2 className='text-xl font-bold'>Frontend Stack</h2>
                            </div>
                            <div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>React.js</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>Tailwind CSS</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>JavaScript</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 bg-white rounded-xl shadow-lg flex-1'>
                            <div className='flex items-center gap-2'>
                                <div className='p-2 bg-orange-600 rounded-md inline-block'><Lucide.Monitor className='text-2xl text-white' /></div>
                                <h2 className='text-xl font-bold'>Backend Stack</h2>
                            </div>
                            <div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>Node.js</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>Express.js</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>MongoDB</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>SQL</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 bg-white rounded-xl shadow-lg flex-1'>
                            <div className='flex items-center gap-2'>
                                <div className='p-2 bg-orange-600 rounded-md inline-block'><Lucide.Monitor className='text-2xl text-white' /></div>
                                <h2 className='text-xl font-bold'> Tools</h2>
                            </div>
                            <div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>React.js</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>Tailwind CSS</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='mt-4 p-4 bg-gray-100 rounded-xl '>
                                    <div className='flex items-center gap-2 justify-between col-span-1 bg-white rounded-xl p-2'>
                                        <div className=' rounded-md inline-flex items-center gap-2'>
                                            <div className='p-2 bg-white rounded-md inline-block'>
                                                <Lucide.Code2 className='text-2xl text-gray-500' />
                                            </div>
                                            <h6 className='text-lg font-bold'>JavaScript</h6>
                                        </div>
                                        <ul className='flex gap-2'>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                            <li className='p-1 bg-orange-500 rounded-md inline-block'></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills