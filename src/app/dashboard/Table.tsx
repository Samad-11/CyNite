'use client'
import { deleteParticipant, toggleVerificationStatus } from '@/lib/actions'
import { participants } from '@prisma/client'
import React, { useRef } from 'react'
import UpdateButton from './UpdateButton'
import ReactToPrint from 'react-to-print'
import Image from 'next/image'
import DeleteButton from './DeleteButton'
import { useEdgeStore } from '@/lib/edgestore'

const Table = ({ participants }: { participants: participants[] }) => {
    const ref = useRef<HTMLTableElement>(null)
    const { edgestore } = useEdgeStore()
    let i = 0;

    function convertUTCDateToLocalDate(date: Date) {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }

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
                        <th>Contact</th>
                        <th>College</th>
                        <th>Event</th>
                        <th>Mate</th>
                        <th>Transaction Id</th>
                        <th className=''>Receipt</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows*/}
                    {
                        participants.map((participant) => {
                            return (

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

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold capitalize">{participant.phone}</div>
                                                <div className="text-sm opacity-90">{participant.email}
                                                </div>
                                                <div className="text-sm opacity-90">At {participant.createdAt.toString().slice(0, 24)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <div>
                                            <div className="font-bold capitalize">{participant.college}</div>
                                            <div className="text-sm opacity-90 capitalize">{participant?.enrollNoY}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold capitalize">{participant.event.replace('_', ' ')}</div>
                                                <div className="text-sm opacity-90 capitalize">{participant?.subEvent?.replace('_', ' ')}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <ul className='uppercase '>
                                            {
                                                participant.mates.map((mate) => (
                                                    <li key={mate} className='list-disc'>
                                                        {mate}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                    <td>{participant.transactionId}</td>
                                    <td>
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        {participant.receiptPath &&

                                            <>

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


                                                        <Image className="mask mask-square border object-cover" src={participant.receiptPath} alt='receipt' fill />

                                                    </div>
                                                    {/*  */}
                                                </button>

                                                <dialog id={participant.id} className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box w-full h-full">
                                                        <h3 className="font-bold text-lg capitalize">{participant.name}</h3>
                                                        <h4 className="font-semibold text-md">{participant.transactionId}</h4>
                                                        <div className="relative h-full w-full">
                                                            <Image className=" object-contain" src={participant.receiptPath} alt='receipt' fill />
                                                        </div>
                                                        <div className="modal-action z-50">
                                                            <form method="dialog">
                                                                {/* if there is a button in form, it will close the modal */}
                                                                <button className="btn">Close</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            className="btn"
                                            onClick={() => {
                                                if (document) {
                                                    (document.getElementById(participant.id) as HTMLFormElement).showModal();
                                                }
                                            }}
                                        >Delete</button>
                                        <dialog id={participant.id} className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Alert</h3>
                                                <p className="py-4">Do you really want to remove <span className='font-bold'> {participant.name}</span> from list</p>
                                                <div className="modal-action">
                                                    <form action={deleteParticipant} method='dialog'>
                                                        <input type="hidden" name="id" value={participant.id} />
                                                        {
                                                            participant.receiptPath &&
                                                            <input type='hidden' name='receiptPath' value={participant.receiptPath} />
                                                        }
                                                        <DeleteButton />
                                                    </form>
                                                    <form method='dialog' className='flex  gap-2'>

                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>
                            <label>
                                Verified
                            </label>
                        </th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>College</th>
                        <th>Event</th>
                        <th>Mate</th>
                        <th>Transaction Id</th>
                        <th className=''>Receipt</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div >
    )
}

export default Table