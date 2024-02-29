'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending} className="btn btn-neutral btn-outline w-full max-w-xs mb-4">
            {pending ? <span className="loading loading-dots loading-lg"></span> : "Submit"
            }
        </button >
    )
}

export default SubmitButton