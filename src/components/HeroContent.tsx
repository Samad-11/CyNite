import Clock from './Clock'
import HeroText from './HeroText'
import HeroSocialLinks from './HeroSocialLinks'
import HeroRegisterButton from './HeroRegisterButton'
import HeroBounceText from './HeroBounceText'

const HeroContent = () => {
    return (
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-full">
                <HeroText />
                <HeroBounceText />
                <HeroRegisterButton />
                <Clock />
            </div>
            <HeroSocialLinks />
        </div>
    )
}

export default HeroContent