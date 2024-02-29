import React from 'react'
import Table from './Table'
import { getAllParticipants } from '@/lib/server'
import { participants } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const DashboardPage = async ({ searchParams }: { searchParams: { verified: string } }) => {
    const session = await getServerSession(authOptions)
    if (!session?.user?.name) {
        redirect("/api/auth/signin")
        return <>Unauthorized...</>
    }
    const data = await getAllParticipants(searchParams.verified);
    return (
        <div className='p-10'>
            <header className='mb-5'>
                <h1 className='text-4xl font-extrabold'>CyNite</h1>
            </header>
            <h1 className='text-center md:text-5xl text-2xl mb-3 '>Participants</h1>
            <Table participants={data as participants[]} />
        </div>
    )
}

export default DashboardPage