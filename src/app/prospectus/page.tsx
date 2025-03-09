'use client'

import React from 'react'


export default function DownloadPage() {
    React.useEffect(() => {
            window.location.href = `https://raw.githubusercontent.com/Jayx2u/lanewayhacks-web/refs/heads/main/public/files/Laneway_Hacks_Prospectus_2025.pdf`
        
    })

    return (
        <div className="flex flex-col space-y-8 mx-4 justify-center items-center min-h-screen text-hack-white">
            <h1 className="text-5xl">Redirecting you to your page...</h1>
        </div>
    )
}