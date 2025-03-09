'use client'

import { useParams } from 'next/navigation'
import React from "react"

export default function DownloadPage() {
    const { filename } = useParams()

    React.useEffect(() => {
        if (filename=="prospectus") {
            window.location.href = `https://raw.githubusercontent.com/Jayx2u/lanewayhacks-web/refs/heads/main/public/files/Laneway_Hacks_Prospectus_2025.pdf`
        }
        else {
            window.location.href = `https://raw.githubusercontent.com/Jayx2u/lanewayhacks-web/refs/heads/main/public/files/${filename}`
        }
    }, [filename])

    return (
        <div className="flex flex-col space-y-8 mx-4 justify-center items-center min-h-screen text-hack-white">
            <h1 className="text-5xl">Redirecting you to your page...</h1>
        </div>
    )
}