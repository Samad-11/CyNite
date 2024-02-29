'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const UpdateButton = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending} className='badge badge-neutral p-2 min-w-10'>
            {
                pending ? <span className="loading loading-ring loading-md p-3 "></span> : "Update"
            }
        </button>
    )
}

export default UpdateButton