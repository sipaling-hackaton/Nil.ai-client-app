import Image from 'next/image'
import { Inter } from 'next/font/google'
import GuestLayout from '@/components/guestlayout'
import ImageLoader from '@/components/imageloader'
import ApplicationLogo from '@/components/applicationlogo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <GuestLayout>
      <main>
        <section
          id='hero'
          className='flex flex-col items-center justify-center w-full h-screen px-4 py-2 gap-[10px]'
        >
          <h1>
            <span className='text-4xl font-bold flex justify-center 
            items-center font-poppins'>
              Welcome to <ApplicationLogo className='text-4xl' />
            </span>
            <span className='text-4xl font-bold text-blue-500'>
            </span>
          </h1>
          <section
            className='flex flex-row gap-4'
          ><a
            href='/login'
            className='bg-blue-500 text-white px-4 py-2 rounded-md w-[20rem] mb-4'
          >
              Login
            </a>
            <a
              href='/register'
              className='bg-blue-500 text-white px-4 py-2 rounded-md w-[20rem] mb-4'
            >
              get started
            </a>
          </section>
        </section>
        <section>
          <ImageLoader
            src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}
            width={1920}
            quality={10}
            className='w-full h-[50vh] object-cover'
          />
        </section>
      </main>

    </GuestLayout>
  )
}