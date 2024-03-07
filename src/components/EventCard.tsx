'use client'
import React, { useRef } from 'react'
import placeholder from '../../public/event/eventPlaceholder.jpg'
import { useInView, motion } from 'framer-motion';
import Link from 'next/link';



const EventCard = ({ eventName = 'coding', url, caption }: { eventName: string, url: string, caption: string }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef)
    return (
        <div

            // href={`/event/${eventName.toLowerCase()}`}
            ref={cardRef} className="eventCard  md:h-44 h-32 md:w-80 w-64 bg-cover flex items-center justify-center font-black text-primary tracking-wider uppercase 
        rounded-full border-[5px] border-neutral-content
        p-4
        relative
        cursor-pointer
        eventBox
        
        
        "
            style={{
                backgroundImage: `url(${url})`,
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 1.2,
                transitionDuration: '2.2s',
                transitionDelay: '150ms'

            }}>
            <div className="hero-overlay rounded-full absolute bg-opacity-40"></div>
            <div className=' w-80  '>
                <p className='md:text-2xl text-lg' >{eventName}</p>
                <p className='transition-all
        duration-700 bg-accent faunaOne eventDetailText text-accent-content rounded-full text-xs w-fit mx-auto p-2'>{caption}</p>
            </div>
        </div>
    )
}

export default EventCard