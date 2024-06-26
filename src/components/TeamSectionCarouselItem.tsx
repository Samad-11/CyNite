import Image from 'next/image'
import React from 'react'

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
                <Image src={image} alt={name} fill
                    className='object-cover rounded-sm'
                    quality={name == 'Abdus Samad' ? 100 : undefined}
                    priority={name == 'Abdus Samad'}
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