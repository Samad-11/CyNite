import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'
const HeroSocialLinks = () => {
    return (
        <div className="social-links absolute left-1 bottom-[20%] md:top-[50%] md:left-[93%]">
            <ul className='flex flex-col md:gap-4 gap-2'>

                <li className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center'>
                    <Link title='instagram' target='_blank' href='https://www.instagram.com/enigma.jimsvk?igsh=MWxyYzg0bWw5ODZ2eQ%3D%3D&utm_source=qr'
                        className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent  flex justify-center items-center
                        hover:text-primary
                        hover:scale-110
                        '
                    ><FaInstagram /></Link>
                </li>
                <li className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center'>
                    <Link title='linkedin' target='_blank' href='https://www.linkedin.com/in/enigma-jims-vk-281a19234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                        className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center
                        hover:text-primary
                        hover:scale-110
                        '

                    ><FaLinkedinIn /></Link>
                </li>
                <li>
                    <Link title='mail' target='_blank' href='mailto:itclub.vk@jimsd.org'
                        className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent flex justify-center items-center
                        hover:text-primary
                        hover:scale-110
                        '
                    ><FaRegEnvelope /></Link>
                </li>

            </ul>
        </div>
    )
}

export default HeroSocialLinks