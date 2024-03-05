import React from 'react'

const Countdown = ({ value, label }: { value: number, label: string }) => {
    return (
        <div className="h-28 w-28  rounded-full border-opacity-45 border-[3px] border-neutral-content bg-accent flex flex-col justify-center items-center text-5xl font-semibold cinzel
        flex-nowrap
        max-md:w-14
        max-md:h-14
        ">
            <h1 suppressHydrationWarning className='max-md:text-lg'>{value}</h1>
            <h2 className='text-xs
            max-md:text-[.5rem]
            max-md:-mt-2

            font-extralight faunaOnez'>{label}</h2>
        </div>
    )
}

export default Countdown