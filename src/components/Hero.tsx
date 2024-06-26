import HeroContent from './HeroContent'


const Hero = () => {
    // const { height, width } = useWindowDimensions()
    // let w = width as unknown as number


    return (
        <div className="hero min-h-screen bgTransition bg-fixed
        cursor-default
        .hero
        md:bg-[url('/heroImg.avif')]
        bg-[url('/hero750.jpg')]
        bg-cover
        ">
            <div className="hero-overlay bg-opacity-65"></div>
            <HeroContent />
        </div>
    )
}

export default Hero
