import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo/jimsLogo.png'

const HeroLogo = () => {
    return (
        <div className="social-links absolute left-3 md:left-5 

        md:-top-3 
        -top-2
        md:h-32
        md:w-32
        h-24
        w-24
        ">
            <Image src={logo} alt='logo'
                fill
                className='object-contain'

            />
        </div>
    )
}

export default HeroLogo