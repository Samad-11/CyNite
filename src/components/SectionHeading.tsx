'use client'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'
const SectionHeading = ({ heading = "Heading" }: { heading: string }) => {
    const headingRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(headingRef)
    return (
        <div ref={headingRef}>

            <motion.h1
                style={{
                    transform: isInView ? "none" : "translateX(-300px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className="cinzel md:text-9xl text-4xl mb-8 font-extrabold tracking-wider">{heading}</motion.h1>
        </div>
    )
}

export default SectionHeading