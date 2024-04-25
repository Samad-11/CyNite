import React from 'react'

const HeroText = () => {
    // const eventDate = new Date('March 15,2024, 10:00:00')
    const words = "At Jagannath International Management School"

    return (
        <div className='mb-10 mt-20'>
            <div className="flex justify-center items-center">
                <div className="C heroText1 uppercase cinzel">
                    <span className='sm:text-sm text-[0.5rem] faunaOne md:tracking-[.8rem] font-black text-secondary-content'>Jims VK</span>
                    <h1 className='lg:text-[15rem] md:text-[10rem] sm:text-9xl text-6xl tracking-widest font-extrabold uppercase cinzel' style={{ lineHeight: ".9" }}>C</h1>
                </div>
                <div className="Y heroText2">
                    <span className='sm:text-sm text-[0.5rem] faunaOne md:tracking-[1rem] font-black'>Present</span>
                    <h1 className='lg:text-[15rem] md:text-[10rem] sm:text-9xl text-6xl tracking-widest font-extrabold uppercase cinzel' style={{ lineHeight: ".9" }}>Y</h1>
                </div>
                <div className="N heroText3">
                    <span className='sm:text-sm text-[0.5rem] faunaOne md:tracking-[1rem] font-black text-secondary-content'>The</span>
                    <h1 className='lg:text-[15rem] md:text-[10rem] sm:text-9xl text-6xl tracking-widest font-extrabold uppercase cinzel' style={{ lineHeight: ".9" }}>N</h1>
                </div>
                <div className="E heroText4">
                    <span className='sm:text-sm text-[0.5rem] faunaOne md:tracking-[.5rem] font-black '>Greatest</span>
                    <h1 className='lg:text-[15rem] md:text-[10rem] sm:text-9xl text-6xl tracking-widest font-extrabold uppercase cinzel' style={{ lineHeight: ".9" }}>E</h1>
                </div>
                <div className="T heroText5">
                    <span className='sm:text-sm text-[0.5rem]  faunaOne md:tracking-[1rem] font-black break-words text-secondary-content'>IT Fest</span>
                    <h1 className='lg:text-[15rem] md:text-[10rem] sm:text-9xl text-6xl tracking-widest font-extrabold uppercase cinzel' style={{ lineHeight: ".9" }}>T</h1>
                </div>
            </div>
            <div className="heroText5 faunaOne font-black text-accent-content sm:-mt-1">
                <p className='sm:text-lg text-sm font-light'>
                    {words}
                </p>
                <p className='text-sm sm:text-base'>
                    Vasant Kunj, New Delhi
                </p>
                { /* <p className='font-black faunaOne sm:text-lg uppercase'>
                    On {eventDate.toDateString()}, {eventDate.toLocaleString().slice(10,)}
                </p> */}
                <p className='text-sm sm:text-base mt-4 ml-10 mr-10'>
                   We&apos;re thrilled to announce that Cynet 2024 was an outstanding success, thanks to the unwavering support and enthusiasm of our incredible community! But the excitement doesn&apos;t end here! We&apos;re thrilled to announce that Cynet will be back next year, bigger and better than ever before! 🌟 Thank you once again for making Cynet Fest 2024 a resounding success! We can&apos;t wait to see you again next year!
                </p>
            </div>
        </div>

    )
}

export default HeroText
