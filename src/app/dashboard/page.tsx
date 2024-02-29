import React from 'react'
import Table from './Table'
import { getAllParticipants } from '@/lib/server'
import { participants } from '@prisma/client';

const DashboardPage = async ({ searchParams }: { searchParams: { verified: string } }) => {
    const data = await getAllParticipants(searchParams.verified);
    return (
        <div className='p-10'>
            <header className='mb-5'>
                <h1 className='text-4xl font-extrabold'>CyNite</h1>
            </header>
            <h1 className='text-center md:text-5xl text-2xl mb-3 '>All The Participants</h1>
            <Table participants={data as participants[]} />
        </div>
    )
}

export default DashboardPage