'use client'
import { useEdgeStore } from '@/lib/edgestore';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useFormStatus } from 'react-dom'

const DeleteButton = () => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit" className="btn btn-error">
            {
                pending ? <span className='loading loading-ring loading-lg'></span> : 'Delete'
            }
        </button>
    )
}

export default DeleteButton