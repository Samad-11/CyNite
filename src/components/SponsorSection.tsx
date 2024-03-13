import React from 'react'
import img from '../../public/prallax3.jpg'
import SectionHeading from './SectionHeading'
import SponsorCarousel from './SponsorCarousel'
import s1 from '../../public/sponsor/landmark2.png'
import s2 from '../../public/sponsor/fresca2.png'
import s3 from '../../public/sponsor/sweep.png'
import Image from 'next/image'

const SponsorSection = () => {
    return (
        <section className="events hero min-h-[120vh] bgTransition bg-fixed cursor-default" style={{ backgroundImage: `url(${img.src}) ` }}>
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-full">
                    <SectionHeading heading='Our Sponsors' />
                    <div className="flex flex-wrap justify-center gap-10 items-center">

                        <div className="h-56  w-56  flex items-center justify-center relative  bg-neutral-content/40  mask mask-squircle">
                            <Image src={s1} alt='Landmark' fill className={'object-contain '} />
                        </div>
                        <div className="h-56  w-56  flex items-center justify-center  
                        bg-neutral-content/40  mask mask-squircle relative ">
                            <Image src={s2} alt='fresca' fill className={'object-contain '} />
                        </div>
                        <div className="h-56  w-56 flex items-center justify-center  bg-neutral-content/40  mask mask-squircle relative ">
                            <Image src={s3} alt='Sweep' fill className={'object-contain '} />
                        </div>
                    </div>
                    {/* <div className="flex gap-8 gap-x-16 flex-wrap justify-center items-center">
                        <SponsorCarousel />
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default SponsorSection