import React from 'react'
import * as Lucide from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Skills = () => {

    const skillsData = [{
        title: "Programming Languages",
        icon: Lucide.Code2,
        skills: [
            { name: "JavaScript", level: 5 },
            { name: "C#", level: 5 },
            { name: "C", level: 4 },
            { name: "C++", level: 4 },
        ]
    },
    {
        title: "Frameworks & Libraries",
        icon: Lucide.Box,
        skills: [
            { name: "React.js", level: 4 },
            { name: "Node.js", level: 4 },
            { name: "Express.js", level: 4 },
            { name: "Tailwind CSS", level: 5 },
        ]
    },
    {
        title: "Tools",
        icon: Lucide.Database,
        skills: [
            { name: "VS Code", level: 5 },
            { name: "Git", level: 5 },
            { name: "GitHub", level: 5 },
        ]
    },
    {
        title: "Database",
        icon: Lucide.Database,
        skills: [
            { name: "Microsoft SQL", level: 5 },
            { name: "MongoDB", level: 5 },
        ]
    }
    ];

    return (
        <section id='skills' className='h-full w-full snap-start snap-always'>
            <div className='h-full w-full bg-white rounded-[60px] '>
                <div className='px-8 py-8 xl:px-24 xl:py-12 h-auto lg:h-[15%] xl:h-[14%]   bg-black inline-flex items-center justify-center rounded-br-[60px] relative z-1'>
                    <h1 className='xl:text-5xl text-3xl font-bold text-white'>Skills</h1>
                    <div className='tag-right xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute bottom-[-50px] left-0 xl:bottom-[-70px] xl:left-0' />
                    <div className='tag-left xl:h-[70px] xl:w-[70px] h-[50px] w-[50px]  bg-black z-10 absolute top-0 right-[-50px] xl:top-0 xl:right-[-70px]' />
                </div>
                <div className='w-full h-full flex items-center justify-center px-8'>
                    <div className='w-full mx-auto mb-12 block 2xl:hidden '>
                        {/* <div className='p-4 bg-white rounded-xl shadow-lg flex-1'>
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
                        </div> */}
                        <Swiper

                            modules={[Navigation, Pagination, Scrollbar]}
                            navigation
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}>
                            {skillsData.map((group, i) => {
                                const Icon = group.icon;

                                return (
                                    <SwiperSlide key={i}>
                                        <div className="p-6 bg-white rounded-2xl shadow-lg">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-orange-500 rounded-lg">
                                                    <Icon className="text-white" />
                                                </div>
                                                <h2 className="text-xl font-bold">{group.title}</h2>
                                            </div>

                                            {group.skills.map((skill, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <div className="flex justify-between">
                                                        <span>{skill.name}</span>
                                                    </div>

                                                    {/* Progress bar */}
                                                    <div className="w-full h-2 bg-gray-200 rounded">
                                                        <div
                                                            className="h-2 bg-orange-500 rounded"
                                                            style={{ width: `${skill.level * 20}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>


                    </div>
                    <div className='w-full mx-auto mb-12 hidden 2xl:block '>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4 max-w-[1600px] mx-auto'>
                            {skillsData.map((group, i) => {
                                const Icon = group.icon;

                                return (
                                    <div key={i} className='p-6 bg-white rounded-2xl shadow-lg'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='p-2 bg-orange-500 rounded-lg'>
                                                <Icon className='text-white' />
                                            </div>
                                            <h2 className='text-xl font-bold'>{group.title}</h2>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            {group.skills.map((skill, idx) => (
                                                <div key={idx} className='mb-3'>
                                                    <div className='flex justify-between'>
                                                        <span>{skill.name}</span>
                                                    </div>
                                                    <div className='w-full h-2 bg-gray-200 rounded'>
                                                        <div
                                                            className='h-2 bg-orange-500 rounded'
                                                            style={{ width: `${skill.level * 20}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills