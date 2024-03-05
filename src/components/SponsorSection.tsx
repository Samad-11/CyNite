import React from 'react'
import img from '../../public/parallax1.jpg'
import SectionHeading from './SectionHeading'
import SponsorCarousel from './SponsorCarousel'

const SponsorSection = () => {
    return (
        <section className="events hero min-h-[120vh] bgTransition bg-fixed cursor-default" style={{ backgroundImage: `url(${img.src}) ` }}>
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-full">
                    <SectionHeading heading='Our Sponsors' />
                    <div className="flex gap-8 gap-x-16 flex-wrap justify-center items-center">
                        {/* <SponsorCarousel /> */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SponsorSection