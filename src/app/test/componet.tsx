'use client'
import React, { SyntheticEvent, useState } from 'react'
import { data } from './test-data'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import path from 'path'

const TestPageComponent = () => {
    const router = useRouter()
    const pathname = usePathname()
    const products = data.products
    const searchParams = useSearchParams()
    const [event, setEvent] = useState('')
    const [verified, setVerified] = useState('')
    const queryToString = () => {

        const params = new URLSearchParams
        params.set('event', 'valorant')
        params.set('varified', 'false')
        router.push(pathname + '?' + params.toString())
    }
    function onTestClick() {
        queryToString()
    }

    const onClickHandler = (e: SyntheticEvent) => {
        const target = e.target as HTMLButtonElement
        const params = new URLSearchParams(searchParams.toString())
        const { name, value } = target
        if (value == '' || value.length < 1) {
            params.delete(name)
            router.push(pathname + '?' + params.toString())
        } else {

            params.set(name, value)

            router.push(pathname + '?' + params.toString())
        }
    }

    return (
        <section className='min-h-screen pt-[10%]'>
            <div className="mx-auto border w-fit p-3">
                <h1>Data</h1>
                <div className="testbtn">
                    <button type="button" onClick={onTestClick} className='btn'>TEST</button>
                </div>
                <div className=" bg-red-100 flex justify-center gap-4">
                    <button onClick={(e) => onClickHandler(e)} name='event' value={'clipclash'} type="button">Clipclash</button>
                    <button onClick={(e) => onClickHandler(e)} name='event' value={'innovision_5'} type="button">Innovision</button>
                    <button onClick={(e) => onClickHandler(e)} name='event' value={'code'} type="button">Code</button>
                    <button onClick={(e) => onClickHandler(e)} name='event' value={''} type="button">All</button>
                </div>
                <div className="price">
                    <button onClick={(e) => onClickHandler(e)} name='verified' value={'true'} type="button">Verified</button>
                    <button onClick={(e) => onClickHandler(e)} name='verified' value={'false'} type="button">Unverified</button>
                    <button onClick={(e) => onClickHandler(e)} name='verified' value={''} type="button">All</button>


                </div>
            </div>
        </section>
    )
}

export default TestPageComponent