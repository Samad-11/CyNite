'use client'
import React, { useEffect, useState } from 'react'
import { Countdown } from 'react-daisyui';

const Clock = () => {

    const dateNow = new Date();
    const eventDate = new Date("2024-03-15")



    //remain days
    const remainDays = eventDate.getDate() - dateNow.getDate();
    //remain hours of the current day
    const remainHours = 24 - dateNow.getHours();
    // remain minutes in current hour
    const remainMinutes = 60 - dateNow.getMinutes()
    //remaining seconds in current minutes
    const remainSeconds = 60 - dateNow.getSeconds();
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
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [seconds]);
    return (<div className="grid grid-flow-col gap-5 mb-5">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content ">
            <Countdown className="font-mono text-5xl" value={remainDays} />
            days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <Countdown className="font-mono text-5xl" value={remainHours} />
            hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <Countdown className="font-mono text-5xl" value={remainMinutes} />
            min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <Countdown className="font-mono text-5xl" value={remainSeconds} />
            sec
        </div>
    </div>)
}

export default Clock