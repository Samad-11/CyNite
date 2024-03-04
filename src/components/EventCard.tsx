'use client'
import React, { useRef } from 'react'
import placeholder from '../../public/event/eventPlaceholder.jpg'
import { useInView, motion } from 'framer-motion';



const EventCard = ({ eventName = 'coding' }: { eventName: string }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef)
    return (
        <div ref={cardRef} className="eventCard  md:h-44 h-32 md:w-80 w-64 bg-cover flex items-center justify-center font-black text-primary tracking-wider uppercase 
        rounded-full border-2 border-neutral-content
        p-4
        hover:scale-110
        hover:rotate-2
        hover:skew-x-3
        duration-75
        relative
        cursor-pointer
        "
            style={{
                backgroundImage: `url(${placeholder.src})`,
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 1.2,
                transitionDuration: '2.2s',
                transitionDelay: '150ms'

            }}>
            <div className="hero-overlay rounded-full absolute bg-opacity-35"></div>
            <div className=' w-80  '>
                <p className='md:text-2xl text-lg' >{eventName}</p>
            </div>
        </div>
    )
}

export default EventCard