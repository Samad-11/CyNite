/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'

const Clock = () => {

    const dateNow = new Date();
    const eventDate = new Date("2024-03-15")



    //remain days
    // const remainDays = eventDate.getDate() - dateNow.getDate();
    const [remainDays, setRemainDays] = useState<number>(eventDate.getDate() - dateNow.getDate())
    //remain hours of the current day
    const [remainHours, setRemainHours] = useState<number>(24 - dateNow.getHours());
    // remain minutes in current hour
    const [remainMinutes, setRemainMinutes] = useState<number>(60 - dateNow.getMinutes());
    //remaining seconds in current minutes
    const [remainSeconds, setRemainSeconds] = useState<number>(60 - dateNow.getSeconds());
    const [seconds, setSeconds] = useState<number>(60);
    useEffect(() => {

        const timer = setTimeout(() => {
            setSeconds(prev => {
                if (prev == 0) {
                    return 60;
                } else {
                    return --prev
                }
            })
            setRemainDays(eventDate.getDate() - dateNow.getDate())
            setRemainHours(24 - dateNow.getHours())
            setRemainMinutes(60 - dateNow.getMinutes())
            setRemainSeconds(60 - dateNow.getSeconds())
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [dateNow, eventDate]);
    return (
        <>
            <div className="flex flex-wrap gap-2 justify-center items-center mb-7">

                <div className="h-28 w-28 rounded-full bg-accent flex flex-col justify-center items-center text-3xl font-semibold font-mono">
                    <h1 suppressHydrationWarning>{remainDays}</h1>
                    <h2 className='text-xs font-extralight'>{'Days'}</h2>
                </div>
                <div className="h-28 w-28 rounded-full bg-accent flex flex-col justify-center items-center text-3xl font-semibold font-mono">
                    <h1 suppressHydrationWarning>
                        {remainHours}
                    </h1>
                    <h2 className='text-xs font-extralight'>{'Hours'}</h2>
                </div>
                <div className="h-28 w-28 rounded-full bg-accent flex flex-col justify-center items-center text-3xl font-semibold font-mono">
                    <h1 suppressHydrationWarning>{remainMinutes}</h1>
                    <h2 className='text-xs font-extralight'>{'Minutes'}</h2>
                </div>
                <div className="h-28 w-28 rounded-full bg-accent flex flex-col justify-center items-center text-3xl font-semibold font-mono">
                    <h1 suppressHydrationWarning>{remainSeconds}</h1>
                    <h2 className='text-xs font-extralight'>{'seconds'}</h2>
                </div>
            </div>
        </>
    )
}

export default Clock