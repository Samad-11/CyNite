'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
const CourseSelect = () => {
    const { pending } = useFormStatus();

    return (

        <select disabled={pending} className="select select-bordered" required name='course' defaultValue={''}>
            <option disabled value={''} >Select</option>
            <option value={'bca'}>BCA</option>
            <option value={'bba'}>BBA</option>
            <option value={'bjmc'}>BJMC</option>
            <option value={'other'}>Other</option>
        </select>
    )
}

export default CourseSelect