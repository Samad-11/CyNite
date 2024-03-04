
import React from 'react'
import EventCard from './EventCard'
import plx1 from '../../public/parallax1.jpg'
import SectionHeading from './SectionHeading'

const EventSection = () => {

    return (
        <section className="events hero min-h-[120vh] bgTransition bg-fixed" style={{ backgroundImage: `url(${plx1.src}) ` }}>
            <div className="hero-overlay bg-opacity-35"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-full">
                    <SectionHeading heading='Events' />
                    <div className="flex gap-8 gap-x-16 flex-wrap justify-center items-center">
                        <EventCard eventName={'coding'} />
                        <EventCard eventName={'Innovation'} />
                        <EventCard eventName={'Gaming'} />
                        <EventCard eventName={'IT Quiz'} />
                        <EventCard eventName={'UI Design'} />
                        <EventCard eventName={'coding'} />
                        <EventCard eventName={'Digital Marketing'} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EventSection