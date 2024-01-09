import React from 'react'

export default function Footer() {
    return (
        <footer
            className='flex justify-center items-center w-full h-24 border-t bg-gray-600'
        >
            {`© ${new Date().getFullYear()} `}
        </footer>
    )
}
