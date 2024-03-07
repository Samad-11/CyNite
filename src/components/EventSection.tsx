
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
                        <EventCard eventName={'Tezar Heist'} url={teizarHeistImage.src} caption='Treasure Hunt' />
                        <EventCard eventName={'UI Universe'} url={uiUniverseImage.src} caption='Website Design' />
                        <EventCard eventName={'Arcade Arena'} url={arcadeArenaImage.src} caption='Gaming' />
                        <EventCard eventName={'Quiz Technopedia'} url={quizTechnopedia.src} caption='IT Quiz' />
                        <EventCard eventName={'innovision  5.0'} url={innovasion5Image.src} caption='Ideathon Competition' />
                        <EventCard eventName={'Code Kalpana: Ribbonathon'} url={codeKalpanaImage.src} caption='Coding Event' />
                        <EventCard eventName={'Clipclash'} url={digidinoImage.src} caption='Reel Making' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EventSection