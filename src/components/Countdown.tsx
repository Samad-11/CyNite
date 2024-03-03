import React from 'react'

const Countdown = ({ value, label }: { value: number, label: string }) => {
    return (
        <div className="h-28 w-28 rounded-full border-[3px] border-neutral-content bg-accent flex flex-col justify-center items-center text-5xl font-semibold cinzel">
            <h1 suppressHydrationWarning className=''>{value}</h1>
            <h2 className='text-xs font-extralight faunaOnez'>{label}</h2>
        </div>
    )
}

export default Countdown