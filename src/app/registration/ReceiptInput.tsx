'use client'
import { useFormStatus } from 'react-dom'

const ReceiptInput = () => {
    const { pending } = useFormStatus()
    return (
        <input accept="image/*" required type="file" disabled={pending} name='receipt' className="file-input file-input-bordered w-full max-w-xs" />
    )
}

export default ReceiptInput