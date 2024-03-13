'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const FormSubmitButton = ({ isFileUploading, isConfirm }: { isFileUploading: boolean, isConfirm: boolean }) => {
    const { pending } = useFormStatus();
    return (
        <button disabled={!isConfirm || pending || isFileUploading} type="submit" className='btn border-[5px] bg-transparent input-bordered w-full font-semibold tracking-wider 
    uppercase hover:input-bordered hover:bg-neutral-content hover:text-neutral max-md:text-xs overflow-x-hidden
    '>
            {pending ? <span className='loading loading-spinner loading-lg'></span> : 'Register'}
        </button>
    )
}

export default FormSubmitButton