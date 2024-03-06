'use client'
import enigmaLogo from '../../public/logo/enigmaLogo.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroEnigmaLogo2 = () => {
    return (
        <div className=' mb-5 -my-8
                w-full
                '>
            <motion.div className='
            h-52 w-52
            
            sm:hidden
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
                    width={1000}
                    height={1000}
                    className='m-auto'
                />
            </motion.div>
        </div>
    )
}

export default HeroEnigmaLogo2