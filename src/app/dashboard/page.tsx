import React from 'react'
import Table from './Table'
import { getAllParticipants } from '@/lib/actions'
import { participants } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import authOptions from '../api/auth/options';
import { prisma } from '../../../server';

const DashboardPage = async ({ searchParams }: { searchParams: { verified: string } }) => {
    const session = await getServerSession(authOptions)
    if (!session?.user?.name) {
        redirect("/api/auth/signin")

    } else {
        if (session.user) {
            const admin = await prisma.admin.findUnique({
                where: {
                    name: session.user.name
                }
            })
            if (!admin) {
                return <>Unauthorized...</>
            }
        }

    }
    const data = await getAllParticipants(searchParams.verified);
    console.log(data);

    return (
        <div className='p-10 faunaOne'>
            <header className='mb-5'>
                <h1 className='text-4xl font-extrabold cinzel'></h1>
            </header>
            <h1 className='text-center md:text-5xl text-2xl mb-3 '>Participants</h1>
            <Table participants={data as participants[]} />
        </div>
    )
}

export default DashboardPage