import Image from 'next/image'
import varun from '../../public/team/president.jpg'
import vk2President from '../../public/team/vk2/vk2President.jpg'
import amrita from '../../public/team/Amrita Kumari (Vice President).jpg'
import vk2Vice from '../../public/team/vk2/vk2Vice President.jpg';
import img from '../../public/parallax1.jpg'

import SectionHeading from './SectionHeading'

const CoordinatorSection = () => {
    return (
        <section className=" hero min-h-[120vh]  bgTransition bg-fixed cursor-default" style={{ backgroundImage: `url(${img.src}) ` }}>
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="sm:max-w-[90%] ">
                    <SectionHeading heading='Head Co-ordinators' />
                    <div className="flex gap-3 flex-wrap  justify-center items-center">
                        <div className="h-64 w-64 relative border-b-[4px] border-b-neutral-content border-l-[4px] border-l-neutral-content border-r-[4px] border-r-red-500 
              border-t-[4px] border-t-red-500
              rounded-md
              carouselItem
              overflow-hidden
              ">
                            <Image src={varun} alt="president" fill className="object-cover" />
                            <div className=" absolute carouselText bg-accent-content rounded-r-full text-neutral p-3 bottom-3 left-2
            transition-transform
            duration-500
            text-sm
            bg-opacity-80
            ">
                                <h1 className='font-semibold cinzel '>Varun</h1>
                                <h2 className='text-secondary faunaOne capitalize'>President</h2>
                            </div>
                        </div>
                        <div className="h-64 w-64 relative border-b-[4px] border-b-neutral-content border-l-[4px] border-l-neutral-content border-r-[4px] border-r-red-500 
              border-t-[4px] border-t-red-500
              rounded-md
               carouselItem
              overflow-hidden
              ">
                            <Image src={vk2President} alt="Vk 2 Vice president" fill className="object-cover" />
                            <div className=" absolute carouselText bg-accent-content rounded-r-full text-neutral p-3 bottom-3 left-2
            transition-transform
            duration-500
            text-sm
            bg-opacity-80
            ">
                                <h1 className='font-semibold cinzel '>Naman Arora</h1>
                                <h2 className='text-secondary faunaOne capitalize'>President-VK2</h2>
                            </div>
                        </div>
                        <div className="h-64 w-64 relative border-b-[4px] border-b-neutral-content border-l-[4px] border-l-neutral-content border-r-[4px] border-r-red-500 
              border-t-[4px] border-t-red-500
              rounded-md
               carouselItem
              overflow-hidden

              ">
                            <Image src={amrita} alt="Vice President" fill className="object-cover" />
                            <div className=" absolute carouselText bg-accent-content rounded-r-full text-neutral p-3 bottom-3 left-2
            transition-transform
            duration-500
            text-sm
            bg-opacity-80
            ">
                                <h1 className='font-semibold cinzel '>Amrita Kumari</h1>
                                <h2 className='text-secondary faunaOne capitalize'>Vice President</h2>
                            </div>
                        </div><div className="h-64 w-64 relative border-b-[4px] border-b-neutral-content border-l-[4px] border-l-neutral-content border-r-[4px] border-r-red-500 
              border-t-[4px] border-t-red-500
              rounded-md
               carouselItem
              overflow-hidden
              ">
                            <Image src={vk2Vice} alt="vk 2 vice president" fill className="object-cover" />
                            <div className=" absolute carouselText bg-accent-content rounded-r-full text-neutral p-3 bottom-3 left-2
            transition-transform
            duration-500
            text-sm
            bg-opacity-80
            ">
                                <h1 className='font-semibold cinzel '>Priyanshu Maheshwari</h1>
                                <h2 className='text-secondary faunaOne capitalize'>Vice President-VK2</h2>
                            </div>
                        </div>
                    </div>
                    {/* <h1 className='cinzel font-light bg-accent rounded-full sm:hidden'>Swipe</h1> */}
                    <div className="praiseTeam">

                    </div>
                </div>
            </div>
        </section >
    )
}

export default CoordinatorSection