'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import img from '../../../public/pexels-pixabay-270408.jpg'
import { registerParticipant } from '@/lib/actions'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'
import UserNameInput from './UserNameInput'
import TransactionInput from './TransactionInput'
import CourseSelect from './CourseSelect'

const RegistrationPage = () => {
    const ref = useRef<HTMLFormElement>(null)

    const [submitOk, setSubmitOk] = useState(false)
    return (
        <div className="grid grid-cols-10 gap-3 bg-neutral">
            <div className="md:col-span-5 col-span-10 h-screen flex flex-col justify-center items-center p-7">
                <h1 className='text-5xl font-extrabold absolute left-3 top-5'>CyNite</h1>
                <h1 className="md:text-5xl text-3xl mb-7 font-semibold tracking-wide">Registration Form</h1>
                <form action={async (formData) => {
                    const { message, ok } = await registerParticipant(formData)
                    ok ? toast.success(message) : toast.error(message)
                    ok && setSubmitOk(true)
                    ref.current?.reset()
                }}
                    className='w-full flex flex-col justify-center items-center' ref={ref}>
                    <label className="form-control w-full max-w-xs mb-4">
                        <div className="label">
                            <span className="label-text">What is your name?</span>
                            <span className="label-text-alt text-red-700 text-lg">*</span>
                        </div>
                        <UserNameInput />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4">
                        <div className="label">
                            <span className="label-text">Transaction ID <i>(fill correctly)</i></span>
                            <span className="label-text-alt text-red-700 text-lg">*</span>
                        </div>
                        <TransactionInput />
                    </label>
                    {/* course dropdown */}
                    <label className="form-control w-full max-w-xs mb-4">
                        <div className="label">
                            <span className="label-text">Your Course</span>
                            <span className="label-text-alt text-red-700 text-lg">*</span>
                        </div>
                        <CourseSelect />
                    </label>
                    <SubmitButton />
                </form>
                <h3 className={` mt-4 p-3 bg-secondary rounded-full text-primary px-5 ${!submitOk && 'hidden'}`}>If Transaction Id is incorrect your registration will be withdraw</h3>
            </div>

            <div className="md:col-span-5 col-span-10 h-screen relative">
                <Image src={img} alt='img' fill className='object-cover' />
            </div>
        </div>
    )
}



export default RegistrationPage