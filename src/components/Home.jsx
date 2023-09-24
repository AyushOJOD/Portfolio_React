import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className='bg-[#0a192f] w-full h-screen'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col first-letter justify-center h-full'>
        <p className='text-pink-500 text-2xl sm:text-4xl'>Hi My name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ayush Srivastava</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>I am a
          <Typewriter
            words={[' Flutter Developer', ' React Developer', ' Full Stack Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={1000}

          />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full-stack developer specializing in building expeptional digital experinces</p>

        <div>
          <button className='text-white border-2 px-6 py-4 my-2 flex item-center gap-2 hover:bg-pink-300 hover:text-[#0a192f] hover:font-bold duration-300'>
            <Link className='flex gap-2' to={'/work'}>View Work < HiArrowNarrowRight size={25} /> </Link>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home
