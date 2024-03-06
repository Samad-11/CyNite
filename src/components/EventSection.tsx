
import React from 'react'
import EventCard from './EventCard'
import plx1 from '../../public/parallax1.jpg'
import SectionHeading from './SectionHeading'
import arcadeArenaImage from '../../public/event/game.jpg'
import digidinoImage from '../../public/event/digital_marketing.jpg'
import codeKalpanaImage from '../../public/event/code.jpg'
import innovasion5Image from '../../public/event/innovasion.jpg'
import uiUniverseImage from '../../public/event/ui.jpg'
import teizarHeistImage from '../../public/event/treasure.jpg'
import quizTechnopedia from '../../public/event/quiz.jpg'


const EventSection = () => {

    return (
        <section className="events hero min-h-screen  bgTransition bg-fixed" style={{ backgroundImage: `url(${plx1.src}) ` }}>
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-full">
                    <SectionHeading heading='Events' />
                    <div className="flex gap-8 gap-x-16 flex-wrap justify-center items-center my-10">
                        <EventCard eventName={'Teizar Heist'} url={teizarHeistImage.src} />
                        <EventCard eventName={'UI Universe'} url={uiUniverseImage.src} />
                        <EventCard eventName={'Arcade Arena'} url={arcadeArenaImage.src} />
                        <EventCard eventName={'Quiz Technopedia'} url={quizTechnopedia.src} />
                        <EventCard eventName={'Innovasion 5.0'} url={innovasion5Image.src} />
                        <EventCard eventName={'Code Kalpana'} url={codeKalpanaImage.src} />
                        <EventCard eventName={'Digidino'} url={digidinoImage.src} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EventSection