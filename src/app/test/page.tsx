import { test } from '@/lib/actions'
import React from 'react'

const page = async () => {
    return (
        <div className="flex justify-center items-center h-screen">

            <button onClick={async () => {
                'use server'
                await test();
            }}>
                test
            </button>
        </div>
    )
}

export default page