import React from 'react'
import img from '../../../public/contactPage/Cynet.png'
import jimsLogo from '../../../public/logo/finalJimslogo.png'
import enigmaLogo from '../../../public/logo/enigmaLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLocationArrow } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { BiEnvelope } from 'react-icons/bi'

const page = () => {
    return (
        <main className='min-h-screen pb-10 px-5 gap-x-2  grid grid-cols-10 bg-[url("/parallax2.jpg")] bg-cover 
        bg-opacity-45
        '
        >
            <div className="right md:hidden py-52 col-span-10 md:col-span-5 h-full flex justify-center items-center bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
            >
                <div className=" w-[65%] h-[0] pt-[70%] relative">
                    <div className="absolute top-[0%]  lg:top-[10%]  w-full text-center  h-[90%]">
                        <div className='flex flex-col gap-4 lg:gap-7'>
                            <div className="head">
                                <h1 className='md:text-2xl text-lg  cinzel lg:text-4xl xl:text-5xl font-extrabold'>Let&apos;s make </h1>
                                <h1 className='md:text-2xl text-lg  cinzel lg:text-4xl xl:text-5xl font-extrabold'>learning fun!</h1>
                            </div>
                            <div className="logos flex gap-5 justify-center">
                                <div className="xl:h-32 lg:h-24 xl:w-32 lg:w-24 md:w-20 md:h-20 relative
                                w-14 h-14
                                ">
                                    <Image src={jimsLogo} alt='Jims Logo ' className='bg-accent rounded-full object-contain' fill />
                                </div>
                                <div className="xl:h-32 lg:h-24 xl:w-32 lg:w-24 md:w-20 md:h-20 relative
                                w-14 h-14
                                ">
                                    <Image src={enigmaLogo} alt='Enigma Logo ' className='bg-accent rounded-full' width={150} height={150} />
                                </div>
                            </div>
                            <div className="btnn">
                                <Link href={'https://wa.me/919773667712?text=CYNET'} target='_blank' className=' flex items-center bg-accent xl:py-4 xl:px-5 py-2 px-3  gap-3 rounded-full  xl:text-2xl font-bold 
                                lg:text-lg
                                
                                cinzel 
                                sm:w-[80%]
                                w-full

                                mx-auto
                        '>
                                    <span className='bg-white p-2 rounded-full flex justify-center text-center'>
                                        <FaLocationArrow className='lg:text-3xl md:text-2xl text-xl:' />
                                    </span>
                                    <span className='text-center flex lg:text-2xl md:text-sm text-sm '>

                                        Click to connect us
                                    </span>
                                </Link>
                            </div>
                            <div className="social flex items-center justify-center gap-5">
                                <Link href={'https://www.instagram.com/enigma.jimsvk?igsh=MWxyYzg0bWw5ODZ2eQ%3D%3D&utm_source=qr'}>
                                    <FaInstagram className='xl:text-4xl lg:text-3xl md:text-3xl text-2xl  text-accent ' />
                                </Link>
                                <Link href={'https://www.linkedin.com/in/enigma-jims-vk-281a19234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}>
                                    <CiLinkedin className='xl:text-4xl lg:text-3xl md:text-3xl text-2xl  text-accent' />
                                </Link>
                                <Link href={'mailto:itclub.vk@jimsd.org'}>
                                    <BiEnvelope className='xl:text-4xl lg:text-3xl md:text-3xl text-2xl  text-accent' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="left col-span-10  md:col-span-5 h-full flex flex-col justify-center items-center ">
                <h1 className='text-lg font-black md:hidden cinzel'>Follow the map to the CYNET</h1>

                <div className=" overflow-hidden  sm:w-[25rem] sm:h-[25rem]
                w-[20rem] h-[20rem]

                bg-[#7812A6] rounded-t-xl  mockup-window -300 ">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3658183019634!2d77.15000119999999!3d28.528722199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d00e93feae5%3A0xbdbecebed2e17592!2sJagannath%20International%20Management%20School%20(JIMS)%20Vasant%20Kunj!5e0!3m2!1sen!2sin!4v1710096268706!5m2!1sen!2sin" style={{ border: '0', height: "90%", width: "100%" }}
                        allowFullScreen={false}
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        className=''

                    ></iframe>
                </div>
                <h1 className='text-2xl font-black max-md:hidden cinzel'>Follow the map to the CYNET</h1>
            </div>
            <div className="right max-md:hidden col-span-10 md:col-span-5 h-full flex justify-center items-center bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
            >
                <div className="   w-[65%] h-[0] pt-[70%] relative">
                    <div className="absolute top-[0%]  lg:top-[10%]  w-full text-center  h-[90%]">
                        <div className='flex flex-col gap-4 lg:gap-7'>
                            <div className="head">
                                <h1 className='md:text-2xl text-lg  cinzel lg:text-4xl xl:text-5xl font-extrabold'>Let&apos;s make </h1>
                                <h1 className='md:text-2xl text-lg  cinzel lg:text-4xl xl:text-5xl font-extrabold'>learning fun!</h1>
                            </div>
                            <div className="logos flex gap-5 justify-center">
                                <div className="xl:h-32 lg:h-24 xl:w-32 lg:w-24 md:w-20 md:h-20 relative
                                w-14 h-14
                                ">
                                    <Image src={jimsLogo} alt='Jims Logo ' className='bg-accent rounded-full object-contain' fill />
                                </div>
                                <div className="xl:h-32 lg:h-24 xl:w-32 lg:w-24 md:w-20 md:h-20 relative
                                w-14 h-14
                                ">
                                    <Image src={enigmaLogo} alt='Enigma Logo ' className='bg-accent rounded-full' width={150} height={150} />
                                </div>
                            </div>
                            <div className="btnn">
                                <Link href={'https://wa.me/919773667712?text=CYNET'} target='_blank' className=' flex items-center bg-accent xl:py-4 xl:px-5 py-2 px-3  gap-3 rounded-full  xl:text-2xl font-bold 
                                lg:text-lg
                                
                                cinzel 
                                w-[80%]
                                mx-auto
                        '>
                                    <span className='bg-white p-2 rounded-full flex justify-center text-center'>
                                        <FaLocationArrow className='lg:text-3xl md:text-2xl text-xl:' />
                                    </span>
                                    <span className='text-center flex lg:text-2xl md:text-sm text-[0.60rem] '>

                                        Click to connect us
                                    </span>
                                </Link>
                            </div>
                            <div className="social flex items-center justify-center gap-5">
                                <Link href={'https://www.instagram.com/enigma.jimsvk?igsh=MWxyYzg0bWw5ODZ2eQ%3D%3D&utm_source=qr'}>
                                    <FaInstagram className='xl:text-4xl lg:text-3xl md:text-3xl text-2xl  text-accent ' />
                                </Link>
                                <Link href={'https://www.linkedin.com/in/enigma-jims-vk-281a19234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}>
                                    <CiLinkedin className='xl:text-4xl lg:text-3xl md:text-3xl text-2xl  text-accent' />
                                </Link>
                                <Link href={'mailto:itclub.vk@jimsd.org'}>
                                    <BiEnvelope className='xl:text-4xl lg:text-3xl md:text-3xl text-2xl  text-accent' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default page