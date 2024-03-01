'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const DeleteButton = () => {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className="btn btn-danger">
            {
                pending ? <span className='loading loading-ring loading-lg'></span> : 'Delete'
            }
        </button>
    )
}

export default DeleteButton