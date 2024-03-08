'use client'
import React, { useRef } from 'react'
import placeholder from '../../public/event/eventPlaceholder.jpg'
import { useInView, motion } from 'framer-motion';
import Link from 'next/link';
const GameCard = ({ name, imageSrc }: { name: string, imageSrc: string }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef)
    return (
        <Link
            href={`/event/arcade_arena/${(name.toLowerCase()).replace(' ', "_")}`}
            ref={cardRef} className=" md:h-32 h-16 md:w-52 w-28 bg-cover flex items-center justify-center font-black text-primary tracking-wider uppercase 
        rounded-full border-[5px] border-neutral-content
        p-4
        relative
        cursor-pointer
        
        
        "
            style={{
                backgroundImage: `url(${imageSrc})`,
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 1.2,
                transitionDuration: '2.2s',
                transitionDelay: '150ms'

            }}>
            {/* <div className="hero-overlay rounded-full absolute bg-opacity-55"></div> */}
            <div className=' w-80  '>
                <p className='text-sm md:text-lg bg-accent py-1 text-center px-2 rounded-xl bg-opacity-50' >{name}</p>
            </div>
        </Link>
    )
}

export default GameCard