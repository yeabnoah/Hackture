"use client"

import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

interface Response {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/3")
    return response.data as Response
}

const Dashboard = () => {
    const { data: response, isLoading, error, refetch } = useQuery({
        queryFn: fetchData,
        queryKey: ["dataFetched"]
    })

    return (
        <div>
            {isLoading ? (
                <div className='text-5xl'>Loading ...</div>
            ) : (
                <div className='text-5xl'>
                    Title: {response?.title}

                    <Button onClick={() => refetch()} className='mt-4 p-2 text-white'>
                        Refetch Data
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Dashboard
