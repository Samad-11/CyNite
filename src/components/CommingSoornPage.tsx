import React from 'react'
import img from "../../public/heroImg.jpg"
import Link from 'next/link';

const CommingSoornPage = () => {
    console.log('====================================');
    console.log(img.src);
    console.log('====================================');
    return (
        <div className="hero h-screen w-screen bg-cover"
            style={{ backgroundImage: `url(${img.src})` }}
        >
            <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content flex flex-col">
                <h1 className='md:text-9xl text-5xl cinzel font-black text-center'>Coming Soon</h1>
                <Link href={'/'} className='text-lg faunaOne animate-pulse font-semibold text-secondary bg-neutral-content p-4 rounded' >
                    Click to go back
                    HOME PAGE</Link>
            </div>
        </div>
    )
}

export default CommingSoornPage