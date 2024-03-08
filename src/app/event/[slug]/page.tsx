import React from 'react'
import img from '../../../../public/event/eventPlaceholder.jpg'
import Image from 'next/image'
import { FaRegClock, FaRegCompass } from 'react-icons/fa'
import Link from 'next/link'
import teizarHeist from '../../../../public/event/treasure.jpg'


import CommingSoornPage from '@/components/CommingSoornPage'

import gamePoster from '../../../../public/event/arcadeArenaPoster.png'
import { events } from '@/lib/events'
import { commingSoon } from '@/lib/commingSoon'


const page = ({ params }: { params: { slug: string } }) => {
    const eventName = params.slug
    console.log('====================================');
    console.log(eventName);
    let event = {
        name: 'teizar heist',
        imageSrc: teizarHeist.src,
        caption: "Game on, World off",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos, excepturi explicabo tempora voluptas quas distinctio. A earum ab quisquam veniam quis nihil aliquam. Unde obcaecati sed dolorum est exercitationem hic repellendus optio, blanditiis animi nihil sequi dolores quod, ducimus libero ut velit veniam nostrum.",
        rules: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos, excepturi explicabo tempora voluptas quas distinctio. A earum ab quisquam veniam quis nihil aliquam. Unde obcaecati sed dolorum est exercitationem hic repellendus optio, blanditiis animi nihil sequi dolores quod, ducimus libero ut velit veniam nostrum.',
        timing: '10:00 Am'
    }

    console.log(encodeURIComponent(((events[5].name).toLowerCase().replace(" ", "_"))));
    console.log('====================================');
    for (let i = 0; i < events.length; i++) {
        if (eventName == encodeURIComponent(((events[i].name).toLowerCase().replace(" ", "_")))) {
            event = events[i]
            break
        }
    }

    if (commingSoon) {
        return <CommingSoornPage />
    }
    return (
        <>
            <section className='min-h-[140vh] bg-accent'>
                <div className="w-full h-[25rem] relative">
                    <div className="bg-neutral-content h-full z-10 bg-opacity-15 backdrop-brightness-50 w-full absolute"></div>
                    <Image src={event.imageSrc} alt='bg' fill className='object-cover mix-blend-overlay' />
                </div>
                <div className="eventSubPage
                lg:w-[78%] w-full
                min-h-full z-20 
                bg-[#a05c9c]
                shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
                pb-10 rounded
                ">
                    <div className="h-80 w-full relative  ">
                        <div className="bg-neutral-content h-full z-10  w-full bg-opacity-0 backdrop-brightness-75 absolute"></div>
                        <Image src={event.imageSrc} alt='bg' fill className='object-cover mix-blend-overlay' />
                        {/* <h1 className='absolute 
                        top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]
                        text-6xl font-black text-accent-content capitalize
                        opacity-25 pl-2 w-full
                        z-20
                        '>{event.caption}</h1> */}
                        <div className="h-full w-60 mx-auto relative ">
                            <Image src={gamePoster} alt='poster' fill className='object-fill shadow-lg shadow-base-300 ' />
                        </div>

                    </div>
                    <div className="grid grid-cols-10 px-8 py-5 text-neutral-content">
                        <div className="col-span-7 border-r-4 border-x-neutral-content">
                            <h1 className='text-4xl cinzel font-extrabold tracking-widest text-primary'>{event.name}</h1>
                            <hr className='border-[3px] border-neutral-content rounded-full' />
                            <div className="description my-5">
                                <h1 className='text-3xl font-extrabold my-3 faunaOne '>Description</h1>
                                <p className="faunaOne pl-5 ">{event.description}</p>
                            </div>
                            <div className="rules my-5">
                                <h1 className='text-3xl font-extrabold my-3 faunaOne '>Rules</h1>
                                <p className="faunaOne pl-5">{event.rules}</p>
                            </div>
                        </div>
                        <div className="col-span-3 pl-3">
                            <div className="registerbtn flex justify-center w-full mb-10">
                                <button type="button" className='btn animate-pulse text-neutral text-lg shadow-accent shadow-lg bg-neutral-content border-accent border-2 w-[90%] cinzel tracking-wide font-bold hover:bg-accent transition-all duration-300'>Register</button>
                            </div>
                            <div className="flex flex-col gap-7 items-center justify-center w-full">

                                <div className='w-[90%] bg-accent shadow-md shadow-accent brightness-150 h-36 rounded-box p-4
                                flex flex-col justify-around'>
                                    <h1 className=' tracking-wider font-black text-2xl'>Timing</h1>
                                    <div className='grid grid-cols-10 gap-3'>
                                        <div className="self-center col-span-2">
                                            <FaRegClock className='text-3xl opacity-25' />
                                        </div>
                                        <div className="col-span-8">
                                            <p className='font-bold text-lg mb-2'>{event.timing} <span className='font-semibold opacity-25'>Onward</span></p>
                                            <span className='font-semibold opacity-25'>15th March 2024</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[90%] bg-accent shadow-md shadow-accent brightness-150 h-36 rounded-box p-4
                                flex flex-col justify-around'>
                                    <h1 className=' tracking-wider font-black text-2xl mb-3'>Location</h1>
                                    <div className='grid grid-cols-10 gap-3'>
                                        <div className="self-center col-span-2">
                                            <FaRegCompass className='text-3xl opacity-25' />
                                        </div>
                                        <div className="col-span-8">
                                            <p className='font-bold text-sm  mb-2'><Link href={'https://maps.app.goo.gl/7kBYakZkh63LFqJo9'} className='link ' target='_blank'>OCF, Pocket 9, Sector B, Vasant Kunj, New Delhi, Delhi 110070</Link> </p>

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