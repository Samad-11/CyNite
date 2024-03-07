import Image from 'next/image'
import React from 'react'
import img from '../../public/team/abdusSamad.png'

const TeamSectionCarouselItem = ({ image, name, desig }: { image: string, name: string, desig: string }) => {
    return (
        <div className="carousel-item carouselItem h-60 w-60   relative boxGradiant
        overflow-hidden
        rounded
        "
            style={{

            }}
        >
            <div className='w-[97%] h-[97%] bg-accent absolute  
            top-[1.48%]
            left-[1.48%]
            rounded-md
            cursor-pointer
            '>
                <Image src={image} alt='teamImage' fill
                    className='object-cover rounded-sm'
                />
            </div>

            <div className=" absolute carouselText bg-accent-content rounded-r-full text-neutral p-3 bottom-3 left-2
            transition-transform
            duration-500
            text-sm
            bg-opacity-80
            ">
                <h1 className='font-semibold cinzel '>{name}</h1>
                <h2 className='text-secondary faunaOne capitalize'>{desig}</h2>
            </div>
        </div>
    )
}

export default TeamSectionCarouselItem