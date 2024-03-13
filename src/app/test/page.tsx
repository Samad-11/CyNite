import React from 'react'
import TestPageComponent from './componet'
import { getAllTest } from '@/lib/actions'

const page = async ({ searchParams }: { searchParams: { verified: string, event: string } }) => {
    const data = await getAllTest(searchParams.verified, searchParams.event)
    console.log(data);
    console.log(data.length);

    return (
        <TestPageComponent />
    )
}

export default page