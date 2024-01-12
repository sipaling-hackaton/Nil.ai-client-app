import { useState } from "react"

interface Props {
    message: string
    children: React.ReactNode
}


const Alert = ({ message, children }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <>
            <div
                onClick={() => setShow(true)}
            >
                {children}
            </div>

            {/* Pop up */}
            <section
                onClick={() => setShow(false)}
                className=
                {`
                w-inherit h-inherit
                    ${show ? 'fixed' : 'hidden'}
                    w-screen h-screen 
                    top-0 left-0
                    bg-black bg-opacity-50
                    flex items-center justify-center
                `}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    id="alert-container"
                    className="bg-white w-1/2 h-1/3 flex items-center justify-center flex-col gap-4 rounded-md"
                >
                    <h1
                        className="text-2xl font-bold"
                    >
                        {message}
                    </h1>
                    <button
                        onClick={() => setShow(false)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-[20rem] mb-4"
                    >
                        OK
                    </button>
                </div>
            </section>
        </>
    )
}

export default Alert