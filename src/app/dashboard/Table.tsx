'use client'
import { toggleVerificationStatus } from '@/lib/server'
import { participants } from '@prisma/client'
import React, { useRef } from 'react'
import UpdateButton from './UpdateButton'
import ReactToPrint from 'react-to-print'

const Table = ({ participants }: { participants: participants[] }) => {
    const ref = useRef<HTMLTableElement>(null)
    let i = 0;
    return (
        <div className="overflow-x-auto">
            <ReactToPrint
                bodyClass="print-agreement"
                content={() => ref.current}
                trigger={() => (
                    <button className='btn text-lg rounded-full'>
                        Print List
                    </button>
                )}
            />
            <table className="table" ref={ref}>
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                Verified
                            </label>
                        </th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows*/}
                    {
                        participants.map((participant) => (
                            <tr key={participant.id}>
                                <th>
                                    <label>

                                        <label>
                                            <form action={toggleVerificationStatus} id='form' className='flex max-md:flex-col gap-2 items-center justify-start'>
                                                <input type="checkbox" className="checkbox" defaultChecked={participant.isTransactionVerify} name='isVerify' />
                                                <input type="hidden" name="participant" value={participant.id} />
                                                <UpdateButton />
                                            </form>
                                        </label>
                                    </label>
                                </th>
                                <td>{++i}</td>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold capitalize">{participant.name}</div>
                                            <div className="text-sm opacity-50">
                                                {
                                                    participant.isTransactionVerify ? 'Verified' : "Unverified"
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='uppercase'>
                                    {participant.course}
                                </td>
                                <td>{participant.transactionId}</td>
                            </tr>
                        ))
                    }
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>Verified</th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Transaction Id</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default Table