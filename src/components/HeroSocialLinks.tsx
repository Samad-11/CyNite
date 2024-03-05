import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const HeroSocialLinks = () => {
    return (
        <div className="social-links absolute left-1 bottom-[40%] md:top-[50%] md:left-[93%]">
            <ul className='flex flex-col md:gap-4 gap-2'>
                <li className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center'>
                    <Link href=''><FaFacebookF /></Link>
                </li>
                <li className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center'>
                    <Link href=''><FaInstagram /></Link>
                </li>
                <li className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center'>
                    <Link href=''><FaXTwitter /></Link>
                </li>
                <li className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center'>
                    <Link href=''><FaYoutube /></Link>
                </li>

            </ul>
        </div>
    )
}

export default HeroSocialLinks