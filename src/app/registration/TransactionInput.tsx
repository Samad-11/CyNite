'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
const TransactionInput = () => {
    const { pending } = useFormStatus();
    return (
        <input disabled={pending} required type="text" minLength={3} name='transactionId' placeholder="Transaction Id" className="input input-bordered w-full max-w-xs" />
    )
}

export default TransactionInput