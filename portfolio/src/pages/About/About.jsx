import React from 'react'
import profile from '../../assets/hero.png'

const About = () => {
    return (
        <section id='about' className='h-full w-full snap-start snap-always'>
            <div className="h-full bg-white rounded-[60px] p-10">

                {/* TOP TEXT */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold gradient-1">
                        Frontend Developer
                    </h1>

                    <p className="text-gray-500 mt-3 max-w-xl">
                        I build modern and responsive web applications using
                        React and modern frontend technologies.
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-2 gap-12 items-center justify-center">

                    {/* LEFT IMAGE */}
                    <div className='bg-white rounded-3xl'>
                        <img
                            src={profile}
                            alt="profile"
                            className="w-full h-[420px] object-contain"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        <h2 className="text-2xl font-semibold mb-3">
                            Eksplorasi Tanpa Batas
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Dengan pengalaman lebih dari 5 tahun di industri
                            kreatif, saya telah membangun ekosistem digital
                            untuk berbagai startup unicorn dan brand global.
                        </p>

                        {/* CARDS */}
                        <div className="grid grid-cols-2 gap-4">

                            <div className="p-5 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-500">STATUS</p>
                                <p className="font-semibold">Freelance Ready</p>
                            </div>

                            <div className="p-5 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-500">LEVEL</p>
                                <p className="font-semibold">Junior Developer</p>
                            </div>

                            <div className="p-5 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-500">QUALITY</p>
                                <p className="font-semibold">99.9% Bug Free</p>
                            </div>

                            <div className="p-5 bg-gray-50 rounded-xl">
                                <p className="text-sm text-gray-500">RESPONSIVE</p>
                                <p className="font-semibold">&lt; 2 Jam</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About