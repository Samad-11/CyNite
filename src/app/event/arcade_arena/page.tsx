import React from 'react'
import Image from 'next/image'
import { FaRegClock, FaRegCompass, FaUser } from 'react-icons/fa'
import Link from 'next/link'

import { events } from '@/lib/events'
import { games } from '@/lib/games'
import GameCard from './GameCard'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Arcade Arena",
    description: "Join now our gaming community and compete"
}
const page = ({ params }: { params: { slug: string } }) => {

    const eventName = params.slug

    const event = events[2]
    return (
        <>
            <section className='min-h-[200vh] bg-accent'>
                <div className="w-full h-[25rem] relative">
                    <div className="bg-neutral-content h-full z-10 bg-opacity-15 backdrop-brightness-50 w-full absolute"></div>
                    <Image src={event.imageSrc} alt='bg' fill className='object-cover mix-blend-overlay' />
                </div>
                {/* eventSubPage */}
                <div className="
                absolute
                top-[50%]
                left-[50%]
                translate-x-[-50%]
                -translate-y-[20%]
                max-lg:-translate-y-[20%]
                lg:w-[78%] w-full
                min-h-full z-20 
                bg-[#a05c9c]
                shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
                pb-10 rounded
                ">
                    <div className="h-52 lg:h-80 w-full relative">
                        <div className="bg-neutral-content h-full z-10  w-full bg-opacity-0 backdrop-brightness-75 absolute"></div>
                        <Image src={event.imageSrc} alt='bg' fill className='object-cover mix-blend-overlay' />
                        {/* <h1 className='absolute 
                        top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]
                        text-6xl font-black text-accent-content capitalize
                        opacity-25 pl-2 w-full
                        z-20
                        '>{event.caption}</h1> */}
                        {/* <div className="h-full w-60 mx-auto relative ">
                            <Image src={game.posterSrc} alt='poster' fill className='object-contain  shadow-lg shadow-base-300 ' />
                        </div> */}
                    </div>
                    <div className="grid grid-cols-10  px-8 py-5 text-neutral-content">
                        <div className="col-span-10 lg:col-span-7 border-r-4 border-x-neutral-content">
                            <div className="registerbtn lg:hidden flex justify-center w-full mb-10">
                                <Link href={`/registration`} type="button" className='btn animate-pulse text-neutral text-lg shadow-accent shadow-lg bg-neutral-content border-accent border-2 w-[90%] cinzel tracking-wide font-bold hover:bg-accent transition-all duration-300'>Register</Link>
                            </div>
                            <h1 className='text-2xl lg:text-4xl cinzel font-extrabold tracking-widest text-primary'>{event.name}</h1>
                            <hr className='border-[3px] border-neutral-content rounded-full' />
                            <div className="description mt-5">
                                {
                                    event.description.map((desc) => (
                                        <p key={desc} className="faunaOne pl-5 max-lg:text-sm mb-4">{desc}</p>

                                    ))
                                }
                            </div>
                            <div className="rules my-6">
                                <h1 className='text-lg lg:text-3xl font-extrabold mt-3 cinzel text-center '>Select Game</h1>
                                <div className='flex flex-wrap gap-2 items-center justify-center my-7'>
                                    {
                                        games.map((game) => (
                                            <GameCard key={game.imageSrc} name={game.name} imageSrc={game.imageSrc} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="registerbtn max-lg:hidden flex justify-center w-full mb-10">
                                <Link href={`/registration?`} type="button" className='btn animate-pulse text-neutral text-lg shadow-accent shadow-lg bg-neutral-content border-accent border-2 w-[90%] cinzel tracking-wide font-bold hover:bg-accent transition-all duration-300'>Register</Link>
                            </div>
                        </div>
                        <div className="col-span-10 lg:col-span-3 pl-3">
                            <div className="registerbtn flex justify-center w-full mb-10">
                                <Link href={`/registration`} type="button" className='btn animate-pulse text-neutral text-lg shadow-accent shadow-lg bg-neutral-content border-accent border-2 w-[90%] cinzel tracking-wide font-bold hover:bg-accent transition-all duration-300'>Register</Link>
                            </div>
                            <div className="flex flex-col gap-7 items-center justify-center w-full">
                                <div className='w-[90%] bg-accent shadow-md shadow-accent brightness-150 h-36 rounded-box p-4
                                flex flex-col justify-around'>
                                    <h1 className=' tracking-wider font-black text-lg lg:text-2xl mb-3'>Timing</h1>
                                    <div className='grid grid-cols-10 gap-3'>
                                        <div className="self-center col-span-2">
                                            <FaRegClock className='text-2xl lg:text-3xl opacity-25' />
                                        </div>
                                        <div className="col-span-8 ">
                                            <p className='font-bold text-base lg:text-lg mb-2'>{event.timing} <span className='font-semibold opacity-25'>Onwards</span></p>
                                            <span className='font-semibold opacity-25'>15th March 2024</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[90%] bg-accent shadow-md shadow-accent brightness-150 h-36 rounded-box p-4
                                flex flex-col justify-around'>
                                    <h1 className=' tracking-wider font-black text-lg lg:text-2xl mb-3'>Location</h1>
                                    <div className='grid grid-cols-10 gap-3'>
                                        <div className="self-center col-span-2">
                                            <FaRegCompass className='text-2xl lg:text-3xl opacity-25' />
                                        </div>
                                        <div className="col-span-8">
                                            <p className='font-bold text-xs lg:text-sm  mb-2'><Link href={'https://maps.app.goo.gl/7kBYakZkh63LFqJo9'} className='link ' target='_blank'>OCF, Pocket 9, Sector B, Vasant Kunj, New Delhi, Delhi 110070</Link> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[90%] bg-accent shadow-md shadow-accent brightness-150 rounded-box p-4
                                flex flex-col justify-around'>
                                    <h1 className=' tracking-wider font-black text-lg lg:text-2xl mb-3'>Co-ordinators</h1>
                                    <div className='grid grid-cols-10 gap-3'>
                                        <div className="self-center col-span-2">
                                            <FaUser className='text-2xl lg:text-3xl opacity-25' />
                                        </div>
                                        <div className="col-span-8 text-sm">
                                            <p className=' mb-2'><span className='font-bold'>Teacher</span>: {event.teacherCoordinators.toUpperCase()}</p>
                                            <p className=' mb-2 capitalize opacity-55'><span className='font-bold'>Student</span>: {event.studentCoordinators}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-[3rem]'>.</div>
            </section>
        </>
    )
}

export default page