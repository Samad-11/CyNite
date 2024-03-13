import React from 'react'
import bg from '../../../public/parallax2.jpg'
import icon from '../../../public/registerPageSvg.svg'
import Form from './Form'
import Image from 'next/image'
import { FaLongArrowAltDown } from 'react-icons/fa'
import Link from 'next/link'
import Footer2 from '@/components/Footer2'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Registration',
    description: "Register here to participate in CYNET"
}
const Registration = () => {
    return (
        <>
            <div className='hero min-h-screen w-screen bg-fixed bg-cover faunaOne'
                style={{ backgroundImage: `url(${bg.src})` }}
            >
                <div className="hero-overlay bg-opacity-45"></div>
                <div className="grid grid-cols-10 w-full min-h-full ">
                    <div className="left col-span-10 lg:col-span-5 flex flex-col h-screen  justify-center max-md:min-h-screen items-center">
                        <div className="w-full h-full md:w-[40rem] md:h-[40rem] relative">
                            <Image src={icon} alt='icons' fill />
                            <div className=" w-[60%] h-[60%]  absolute 
                        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
                                <p className='cinzel text-2xl md:text-5xl font-black text-base-200 text-center'>Register now for the greatest IT Fest of the Season</p>
                            </div>
                            <div className='absolute bottom-[15%] left-[35%]'>
                                <Link href={'#formSection'} className='flex md:hidden justify-center items-center animate-bounce text-2xl font-bold cinzel'>Below <FaLongArrowAltDown /></Link>
                            </div>
                        </div>
                    </div>
                    <div id='formSection' className="right col-span-full lg:col-span-5 hero md:min-h-full min-h-screen "
                    >
                        <div className="hero-overlay bg-opacity-90 max-w-full "></div>
                        <div className="form-section w-[80%] min-h-[90%] flex flex-col justify-center items-center gap-3 mb-10">
                            <h1 className='text-2xl cinzel font-extrabold tracking-wider mt-20'>Register Now</h1>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration