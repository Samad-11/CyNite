/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import Countdown from './Countdown';
import { log } from 'console';

const Clock = () => {
    const dateNow = new Date();
    const eventDate = new Date('March 15,2024, 7:00:00');
    // Set the date we're counting down to
    var countDownDate = new Date('March 15,2024, 08:45:00').getTime();
    const [remainDays, setRemainDays] = useState<number>(0)
    //remain hours of the current day
    const [remainHours, setRemainHours] = useState<number>(0);
    // remain minutes in current hour
    const [remainMinutes, setRemainMinutes] = useState<number>(0);
    //remaining seconds in current minutes
    const [remainSeconds, setRemainSeconds] = useState<number>(0);
    const [isTimeNotLeft, setIsTimeLeft] = useState(false)

    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setRemainMinutes(minutes);
        setRemainHours(hours)
        setRemainSeconds(seconds)
        setRemainDays(days)

        // Display the result in the element with id="demo"


        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            setIsTimeLeft(true)
        }
    }, 1000);

    // console.log('====================================');
    // console.log(eventDate.getDate() - dateNow.getDate(), " ", eventDate.getHours() - dateNow.getHours(), " ", eventDate.getMinutes() - dateNow.getMinutes());
    // console.log('====================================');


    //remain days
    // const remainDays = eventDate.getDate() - dateNow.getDate();

    const [seconds, setSeconds] = useState<number>(60);

    useEffect(() => {
        // if (!(remainDays >= 0 &&
        //     remainHours >= 0 &&
        //     remainMinutes >= 0 &&
        //     remainSeconds >= 0)) {


        // const timer = setTimeout(() => {
        //     setSeconds(prev => {
        //         if (prev == 0) {
        //             return 60;
        //         } else {
        //             return --prev
        //         }
        //     })
        //     setRemainDays(eventDate.getDate() - dateNow.getDate() - 0)
        //     setRemainHours(eventDate.getHours() - dateNow.getHours())
        //     setRemainMinutes(60 - dateNow.getMinutes())
        //     setRemainSeconds(60 - dateNow.getSeconds())
        //     setIsTimeLeft(eventDate > dateNow)
        // }, 1000);

        // return () => {
        //     clearTimeout(timer);
        // };
        // }
    }, [dateNow, eventDate]);
    return (
        <>
            <div className="flex flex-wrap gap-5 justify-center items-center mb-7">
                {/* <Countdown value={0} label='Days' /> */}
                <Countdown value={isTimeNotLeft ? 0 : remainDays} label='Days' />
                <Countdown value={isTimeNotLeft ? 0 : remainHours} label='Hours' />
                <Countdown value={isTimeNotLeft ? 0 : remainMinutes} label='Minutes' />
                <Countdown value={isTimeNotLeft ? 0 : remainSeconds} label='Seconds' />
            </div>
        </>
    )
}

export default Clock