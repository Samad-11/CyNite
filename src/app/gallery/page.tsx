import React from 'react'

import Footer2 from '@/components/Footer2'
import Gallery from './Gallery'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Team Gallery',
    description: "Here's our IT department, the engine driving our digital journey. With expertise in every byte, we're the force behind seamless operations, innovation, and technological advancement."
}
const GalleryPage = () => {
    return (
        <>

            <main className='min-h-screen bg-base-100 '>
                <div className="header border-b-[3px] border-b-neutral-content w-fit mx-auto">
                    <h1 className='pt-28 pb-5 text-center text-2xl md:text-4xl cinzel font-black'>Team <span className='font-light'> Gallery</span> </h1>
                </div>
                <Gallery />
            </main >
            <Footer2 />
        </>
    )
}

export default GalleryPage