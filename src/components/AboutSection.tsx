import React from 'react'
import SectionHeading from './SectionHeading'
import plx2 from '../../public/parallax2.jpg'
import AboutSectionContent from './AboutSectionContent'

const AboutSection = () => {
    return (
        <section className="events hero min-h-[120vh] bgTransition bg-fixed" style={{ backgroundImage: `url(${plx2.src}) ` }}>
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-full">
                    <SectionHeading heading='About Cynet' />
                    <div className="flex gap-8 gap-x-16 flex-wrap justify-center items-center">
                        <AboutSectionContent />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutSection