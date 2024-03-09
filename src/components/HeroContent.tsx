import Clock from './Clock'
import HeroText from './HeroText'
import HeroSocialLinks from './HeroSocialLinks'
import HeroRegisterButton from './HeroRegisterButton'
import HeroBounceText from './HeroBounceText'
import HeroLogo from './HeroLogo'
import HeroEnigmaLogo from './HeroEnigmaLogo'
import HeroEnigmaLogo2 from './HeroEnigmaLogo2'

const HeroContent = () => {
    return (
        <div className="hero-content text-center text-neutral-content 
        max-sm:mt-[-20%]
        "
            style={{

            }}>
            <div className="max-w-full">
                <HeroText />
                <HeroEnigmaLogo />
                {/*  */}
                {/* <div className='tracking-wide my-4'>
                    <h1 className='cinzel text-2xl md:text-4xl font-black'>

                        Registration opens on
                    </h1>
                    <p className='faunaOne text-lg md:text-3xl font-black'>
                        Saturday 9th March,2024
                    </p>
                </div> */}
                {/*  */}
                <HeroBounceText />
                <HeroRegisterButton />
                <Clock />
                <HeroEnigmaLogo2 />
            </div>
            <HeroSocialLinks />
            {/* <HeroLogo /> */}
        </div>
    )
}

export default HeroContent