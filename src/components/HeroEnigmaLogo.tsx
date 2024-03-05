import enigmaLogo from '../../public/logo/enigmaLogo.png'
import Image from 'next/image'

const HeroEnigmaLogo = () => {
    return (
        <div className=' mb-5 -my-5
                w-full
                '>
            <div className='h-20 w-20 mx-auto'>

                <Image src={enigmaLogo} alt='enigmaLogo'
                    width={200}
                    height={200}
                    className='m-auto'
                />
            </div>
        </div>
    )
}

export default HeroEnigmaLogo