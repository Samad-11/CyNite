import Clock from './Clock'
import HeroText from './HeroText'
import HeroSocialLinks from './HeroSocialLinks'
import HeroRegisterButton from './HeroRegisterButton'
import HeroBounceText from './HeroBounceText'
import HeroLogo from './HeroLogo'
import HeroEnigmaLogo from './HeroEnigmaLogo'

const HeroContent = () => {
    return (
        <div className="hero-content text-center text-neutral-content 
        max-sm:mt-[-50%]
        "
            style={{

            }}>
            <div className="max-w-full">
                <HeroText />
                <HeroEnigmaLogo />
                <HeroBounceText />
                <HeroRegisterButton />
                <Clock />
            </div>
            <HeroSocialLinks />
            <HeroLogo />
        </div>
    )
}

export default HeroContent