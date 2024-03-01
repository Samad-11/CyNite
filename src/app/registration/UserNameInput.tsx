'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const UserNameInput = () => {
    const { pending } = useFormStatus();
    return (
        <input disabled={pending} required type="text" minLength={3} name='name' placeholder="Enter your full name" className="input input-bordered w-full max-w-xs" />
    )
}

export default UserNameInput