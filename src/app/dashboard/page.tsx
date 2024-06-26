import React, { Suspense } from 'react'
import Table from './Table'
import { getAllParticipants, getAllTest } from '@/lib/actions'
import { participants } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import authOptions from '../api/auth/options';
import { prisma } from '../../../server';

const DashboardPage = async ({ searchParams }: { searchParams: { verified: string, event: string, last24hours: string } }) => {
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
    const data = await getAllTest(searchParams.verified, searchParams.event, searchParams.last24hours);

    const verify = searchParams.verified ? (searchParams.verified == 'true') ? "Verified" : "Unverified" : '';
    const event = searchParams.event ? searchParams.event : '';
    const last24hours = searchParams.last24hours ? searchParams.last24hours : '';
    return (
        <div className='p-10 faunaOne'>
            <header className='mb-5'>
                <h1 className='text-4xl font-extrabold cinzel'></h1>
            </header>
            <h1 className='text-center md:text-5xl text-2xl mb-3 '>Participants</h1>
            <h1 className='text-center md:text-3xl text-sm mb-3 capitalize'>

                {
                    (last24hours) ? "Last 24 Hours" :
                        (verify || event) ?
                            (verify && event) ?
                                event.replace("_", " ") + " " + verify :
                                (verify) ? verify :
                                    (event) ? (event == 'innovision_5') ? "Innovision 5.0" : event.replace("_", " ") : "All"

                            : "All"
                }
                &nbsp;#{data?.length}
                {/* {

                    


                    last24hours ? "Last 24 Hours" :
                        (event || verify) ? (event) ? (event == 'innovision_5') ? "Innovision 5.0" : event.replace("_", " ") : (verify == 'true') ? 'Verified' : 'Unverified' : "All"}
                &nbsp;#{data?.length} */}
            </h1>
            <Table participants={data as participants[]} />
        </div>
    )
}

export default DashboardPage