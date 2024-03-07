import React from 'react'
import SponsorCarouselItem from './TeamSectionCarouselItem'
import { map } from 'zod'

const SponsorCarousel = () => {

    return (
        <div className="carousel rounded-box w-[90%] justify-center  gap-3 carousel-center">

            <SponsorCarouselItem />
            <SponsorCarouselItem />
            <SponsorCarouselItem />
            <SponsorCarouselItem />
            <SponsorCarouselItem />

        </div>
    )
}

export default SponsorCarousel