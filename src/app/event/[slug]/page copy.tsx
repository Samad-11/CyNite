import React from 'react'
import img from '../../../../public/event/eventPlaceholder.jpg'
import Image from 'next/image'
import plx from '../../../../public/parallax1.jpg'

const page = ({ params }: { params: { slug: string[] } }) => {
    const eventName = params.slug[0]
    return (
        <>
            <section className='w-screen min-h-screen bg-primary-content cinzel
            bg-cover
            
            '
                style={{ backgroundImage: `url(${plx.src})` }}
            >
                <div className="backdrop-brightness-50 min-h-screen w-full">


                    <div className='mb-5'>
                        <h1 className='text-8xl text-center w-full font-bold tracking-wider'>{params.slug}</h1>
                    </div>
                    <div className='p-10 flex  gap-72 items-center tracking-wider'>
                        <div>

                            <div className="h-96 w-72 carousel carousel-vertical border-[5px] border-neutral-content bg-neutral">
                                <div className="carousel-item h-full w-full relative ">
                                    <Image src={img} alt={params.slug[0]} fill className='object-cover' />
                                </div>
                                <div className="carousel-item h-full w-full relative ">
                                    <Image src={img} alt={params.slug[0]} fill className='object-cover' />
                                </div>
                                <div className="carousel-item carousel-center h-full w-full relative ">
                                    <Image src={img} alt={params.slug[0]} fill className='object-cover' />
                                </div>
                            </div>
                            <p className='text-center w-full'>Swipe up </p>
                        </div>
                        <div className="reg">

                        </div>
                        <div className="faunaOne">
                            <ul className=''>
                                <li className='text-4xl list-item mb-6'>Entry Fee : $100/-</li>
                                <li className="text-4xl list-item">
                                    <p className='mb-3'>Winning Prizes</p>
                                    <ul className='pl-10 list-disc'>
                                        <li className='list-item'>
                                            1st - 400/-
                                        </li>
                                        <li className='list-item'>
                                            2nd - 200/-
                                        </li>
                                        <li className='list-item'>
                                            3rd - 100/-
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default page