import Link from 'next/link'
import React from 'react'

export default function ApplicationLogo({
    className,
}: { className?: string }

) {
    return (
        <Link
            href={"/"}
            className={`text-black font-poppins
            font-bold text-2xl 
            ${className} 
            `}
        >
            nil.ai
        </Link>
    )
}
