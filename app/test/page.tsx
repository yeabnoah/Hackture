import { auth } from '@/lib/auth'
import React from 'react'

async function page() {
    const session = await auth()
    console.log("0000000000000000000000000000000000", session)

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default page
