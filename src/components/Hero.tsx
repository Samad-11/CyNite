import React from 'react'
import heroImg from '../../public/heroImg.jpg'
import HeroContent from './HeroContent'


const Hero = () => {
    return (
        <div className="hero min-h-screen bgTransition " style={{ backgroundImage: `url(${heroImg.src}) ` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <HeroContent />
        </div>
    )
}

export default Hero
