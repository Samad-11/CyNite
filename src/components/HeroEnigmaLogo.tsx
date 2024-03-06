'use client'
import enigmaLogo from '../../public/logo/enigmaLogo.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroEnigmaLogo = () => {
    return (
        <div className=' mb-5 -my-8
                w-full
                '>
            <motion.div className='max-md:h-20 max-md:w-20
            h-24 w-24
            max-sm:hidden
            mx-auto transition-all du'
                initial={{
                    opacity: "0",
                    scale: ".2"
                }}
                animate={{
                    opacity: "1",
                    scale: "1"
                }}

            >

                <Image src={enigmaLogo} alt='enigmaLogo'
                    width={200}
                    height={200}
                    className='m-auto'
                    priority
                />
            </motion.div>
        </div>
    )
}

export default HeroEnigmaLogo