'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const AboutSectionContent = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef)
    const text = "CYNET, the flagship Annual IT Fest of JIMS Vasant Kunj, has been a beacon of technological excellence for the past 20 years. This hallmark event is a dynamic convergence of creativity and innovation, showcasing a diverse array of competitions. From the precision of website design to the excitement of treasure hunts, the cinematic craft of reel making, and the strategic intensity of gaming competitions, CYNET offers a comprehensive platform for IT enthusiasts."
    const text2 = "What distinguishes CYNET is its broad appeal, drawing participants from across Delhi NCR.It has become a melting pot of talent, ideas, and enthusiasm, reflecting the rich diversity of the region's student community. As a testament to its success, CYNET has evolved beyond a mere fest becoming a hub for the exchange of ideas and the celebration of technological prowess."
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
                <p className='text-justify faunaOne my-4 '>
                    {text}
                </p>
                <p className='text-justify faunaOne my-4'>
                    {text2}
                </p>
                <hr className='w-1/3 self-end  mt-4 border-2' />
            </div>
        </>
    )
}

export default AboutSectionContent