'use client'
import { deleteParticipant, toggleVerificationStatus } from '@/lib/actions'
import { participants } from '@prisma/client'
import React, { Suspense, useRef, useState } from 'react'
import UpdateButton from './UpdateButton'
import ReactToPrint from 'react-to-print'
import Image from 'next/image'
import DeleteButton from './DeleteButton'

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
                        <th className=''>Receipt</th>
                        <th></th>
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
                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button
                                        className=""
                                        onClick={() => {
                                            if (document) {
                                                (document.getElementById(participant.id) as HTMLFormElement).showModal();
                                            }
                                        }}
                                    >
                                        {/*  */}
                                        <div className='h-20 w-20 relative'>

                                            {participant.receiptPath &&
                                                <Image className="mask mask-square border object-cover" src={`/tmp/${participant.receiptPath}`} alt='receipt' fill />
                                            }
                                        </div>
                                        {/*  */}
                                    </button>
                                    <dialog id={participant.id} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box w-full h-full relative">
                                            <h3 className="font-bold text-lg capitalize">{participant.name}</h3>
                                            <h4 className="font-semibold text-md">{participant.transactionId}</h4>
                                            <Image className=" object-contain" src={`/tmp/${participant.receiptPath}`} alt='receipt' fill />
                                            <div className="modal-action absolute z-50">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                </td>
                                <td>
                                    <form action={deleteParticipant}>
                                        <input type="hidden" name="id" value={participant.id} />
                                        {
                                            participant.receiptPath &&
                                            <input type='hidden' name='receiptPath' value={participant.receiptPath} />
                                        }
                                        <DeleteButton />
                                    </form>
                                </td>
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
                        <th>Receipt</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default Table