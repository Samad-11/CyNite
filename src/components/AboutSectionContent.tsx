'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const AboutSectionContent = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef)
    const text = 'CYNET is an annual IT Festival organised by the IT Department and society of Jagannath International Management School, Vasant Kunj, New Delhi. The event consists of various competition series that are open to all the colleges students across the world with exciting cash prizes as well.'
    return (
        <>
            <div ref={contentRef} className={`faunaOne md:text-2xl md:leading-10
            max-sm:text-sm
        transition-all
        duration-[2.3s]
        delay-150
        ${isInView ? "opacity-100" : "opacity-0"}
        ${isInView ? "translate-y-0" : "translate-y-52"}
        bg-accent
        p-8
        bg-opacity-85
        rounded-3xl
        flex flex-col
        `
            }>
                <hr className='w-1/3 mb-4 border-2' />
                <p className='text-justify faunaOne '>
                    {text}
                </p>
                <hr className='w-1/3 self-end  mt-4 border-2' />
            </div>
        </>
    )
}

export default AboutSectionContent