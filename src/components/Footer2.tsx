import React from 'react'
import img from '../../public/parallax1.jpg'
import jimsLogo from '../../public/logo/finalJimslogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelopeAt } from 'react-icons/bs'
const Footer2 = () => {
    const date = new Date();
    return (
        <>
            <hr className='w-1/2 mx-auto ' />
            <footer className="footer absolute z-[50] items-center p-4  text-neutral-content bg-fixed bg-cover bg-no-repeat "
                style={{ backgroundImage: `url(${img.src})` }}
            >
                {/* <div className="absolute h-full w-full bg-black bg-opacity-65 z-0"></div> */}

                <aside className="items-center grid-flow-col justify-center z-10 text-primary">
                    <Image src={jimsLogo} alt='Logo' width={60} height={60} />
                    <p className='font-bold'>Copyright © {date.getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end z-10">
                    <Link href='' className='tooltip tooltip-left text-2xl rounded-full text-accent p-2  bg-accent-content' data-tip='Instagram'>
                        <FaInstagram />
                    </Link>

                    <Link href='' className='tooltip tooltip-left text-2xl rounded-full text-accent p-2  bg-accent-content' data-tip='LinkedIn'>
                        <FaLinkedinIn />
                    </Link>
                    <Link href='' className='tooltip tooltip-left text-2xl rounded-full text-accent p-2  bg-accent-content' data-tip='Gmail'>
                        <BsEnvelopeAt />
                    </Link>
                </nav>
                <div className="grid-flow-row col-span-full bg-black/65 py-1 px-2 cinzel font-bold tracking-wide text-center">Website Created By Developer Team of Enigma</div>
            </footer>
        </>
    )
}


export default Footer2