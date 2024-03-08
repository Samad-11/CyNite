import React from 'react'
import Image from 'next/image'
import { FaRegClock, FaRegCompass } from 'react-icons/fa'
import Link from 'next/link'

import { redirect } from 'next/navigation'
import { games } from '@/lib/games'


const page = ({ params }: { params: { slug: string } }) => {
    const gameName = params.slug

    let game = games[0]
    let flag = false;
    for (let i = 0; i < games.length; i++) {
        if (gameName == encodeURIComponent(((games[i].name).toLowerCase().replace(" ", "_")))) {
            game = games[i]
            flag = true;
        }
    }
    if (!flag) {
        redirect('../../../not-found.tsx')
    }
    return (
        <>
            <section className='min-h-[200vh] bg-accent'>
                <div className="w-full h-[25rem] relative">
                    <div className="bg-neutral-content h-full z-10 bg-opacity-15 backdrop-brightness-50 w-full absolute"></div>
                    <Image src={game.imageSrc} alt='bg' fill className='object-cover mix-blend-overlay' />
                </div>
                {/* gameSubPage */}
                <div className="
                absolute
                top-[50%]
                left-[50%]
                translate-x-[-50%]
                -translate-y-[20%]
                max-lg:-translate-y-[18%]
                lg:w-[78%] w-full
                min-h-full z-20 
                bg-[#a05c9c]
                shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
                pb-10 rounded
                ">
                    <div className="h-52 lg:h-80 w-full relative">
                        <div className="bg-neutral-content h-full z-10  w-full bg-opacity-0 backdrop-brightness-75 absolute"></div>
                        <Image src={game.imageSrc} alt='bg' fill className='object-cover mix-blend-overlay' />
                        {/* <h1 className='absolute 
                        top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]
                        text-6xl font-black text-accent-content capitalize
                        opacity-25 pl-2 w-full
                        z-20
                        '>{game.caption}</h1> */}
                        {/* <div className="h-full w-60 mx-auto relative ">
                            <Image src={game.posterSrc} alt='poster' fill className='object-contain  shadow-lg shadow-base-300 ' />
                        </div> */}
                    </div>
                    <div className="grid grid-cols-10  px-8 py-5 text-neutral-content">
                        <div className="col-span-10 lg:col-span-7 border-r-4 border-x-neutral-content">
                            <div className="registerbtn lg:hidden flex justify-center w-full mb-10">
                                <button type="button" className='btn animate-pulse text-neutral text-lg shadow-accent shadow-lg bg-neutral-content border-accent border-2 w-[90%] cinzel tracking-wide font-bold hover:bg-accent transition-all duration-300'>Register</button>
                            </div>
                            <h1 className='text-2xl lg:text-4xl cinzel font-extrabold tracking-widest text-primary'>{game.name}</h1>
                            <hr className='border-[3px] border-neutral-content rounded-full' />
                            <div className="description my-5">
                                {/* <h1 className='text-3xl font-extrabold my-3 faunaOne '></h1> */}
                                {/* <p className="faunaOne pl-5 max-lg:text-sm ">{game.description}</p> */}
                            </div>
                            <div className="rules my-5">
                                <h1 className='text-lg lg:text-3xl font-extrabold my-3 faunaOne '>Rules</h1>
                                <ul className="faunaOne pl-5 list-disc max-lg:text-sm pr-1">
                                    {
                                        game.rules.map((rule) => (
                                            <li key={rule}>{rule}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {
                                (game.teamRoaster[0] != "".replace(' ', "")) &&
                                <div className="rules my-5">
                                    <h1 className='text-lg lg:text-3xl font-extrabold my-3 faunaOne '>Team And Roster</h1>
                                    <ul className="faunaOne pl-5 list-disc max-lg:text-sm pr-1">
                                        {
                                            game.teamRoaster.map((roaster) => (
                                                <li key={roaster}>{roaster}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                            {
                                (game.punishment[0] != "".replace(' ', "")) &&
                                <div className="rules my-5">
                                    <h1 className='text-lg lg:text-3xl font-extrabold my-3 faunaOne '>PUNISHMENTS FOR VIOLATING RULES</h1>
                                    <p className='faunaOne text-sm'>If any player found to be violating the rules and indulging in the below mentioned things will be
                                        disqualified immediately</p>
                                    <ul className="faunaOne pl-5 list-disc max-lg:text-sm pr-1">
                                        {
                                            game.teamRoaster.map((roaster) => (
                                                <li key={roaster}>{roaster}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                            {
                                (game.pointSystem[0] != "".replace(' ', "")) &&
                                <div className="rules my-5">
                                    <h1 className='text-lg lg:text-3xl font-extrabold my-3 faunaOne '>Points System</h1>
                                    <p className='faunaOne text-sm'>If any player found to be violating the rules and indulging in the below mentioned things will be
                                        disqualified immediately</p>
                                    <ul className="faunaOne pl-5 list-disc max-lg:text-sm pr-1">
                                        {
                                            game.pointSystem.map((point) => (
                                                <li key={point}>{point}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }

                            <div className="registerbtn max-lg:hidden flex justify-center w-full mb-10">
                                <button type="button" className='btn animate-pulse text-neutral text-lg shadow-accent shadow-lg bg-neutral-content border-accent border-2 w-[90%] cinzel tracking-wide font-bold hover:bg-accent transition-all duration-300'>Register</button>
                            </div>
                        </div>
                        <div className="col-span-10 lg:col-span-3 pl-3">
                            <div className="registerbtn flex justify-center w-full mb-10">
                                <button type="button" className='btn animate-pulse text-neutral text-lg shadow-accent shadow-lg bg-neutral-content border-accent border-2 w-[90%] cinzel tracking-wide font-bold hover:bg-accent transition-all duration-300'>Register</button>
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
                                            <p className='font-bold text-base lg:text-lg mb-2'>{game.timing} <span className='font-semibold opacity-25'>Onward</span></p>
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
