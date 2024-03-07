'use client'
import hero750 from '../../public/hero750.jpg'
import HeroContent from './HeroContent'
import useWindowDimensions from '@/lib/useWindow'


const Hero = () => {
    const { height, width } = useWindowDimensions()
    let w = width as unknown as number


    return (
        <div className="hero min-h-screen bgTransition bg-fixed
        cursor-default
        .hero
        md:bg-[url('/heroImg.jpg')]
        bg-[url('/hero750.jpg')]
        " style={{
                // backgroundImage: `url(${(w > 750) ? hero750.src : heroImg.src})`,

            }}>
            <div className="hero-overlay bg-opacity-65"></div>
            <HeroContent />
        </div>
    )
}

export default Hero
