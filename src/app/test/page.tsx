import { test } from '@/lib/actions'
import React from 'react'

const page = async () => {
    await test();
    return (
        <div>page</div>
    )
}

export default page