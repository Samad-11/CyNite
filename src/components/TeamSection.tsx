import React from 'react'
import img from '../../public/parallax1.jpg'
import SectionHeading from './SectionHeading'
import SponsorCarousel from './SponsorCarousel'
import TeamSectionCarousel from './TeamSectionCarousel'

const TeamSection = () => {
    return (
        <>
            <section className=" hero min-h-[120vh]  bgTransition bg-fixed cursor-default" style={{ backgroundImage: `url(${img.src}) ` }}>
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="sm:max-w-[90%] ">
                        <SectionHeading heading='Our Team' />
                        <div className="flex max-sm:w-60  justify-center items-center">
                            <TeamSectionCarousel />
                        </div>
                        <h1 className='cinzel font-light bg-accent rounded-full sm:hidden'>Swipe</h1>
                        <div className="praiseTeam">

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default TeamSection