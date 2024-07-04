import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home = () => {
  return (
    <div className='bg-[#0a192f] w-full h-screen'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col first-letter justify-center h-full'>
        <p className='text-pink-500 text-2xl sm:text-4xl'>Hi My name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ayush Srivastava</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>I am a
          <Typewriter
            words={[' React Developer', ' Flutter Developer', ' Full Stack Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={1000}

          />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full-stack developer specializing in building expeptional digital experinces</p>

        <div className='flex'>
          <button className='text-white mx-4 border-2 px-6 py-4 my-2 flex item-center gap-2 hover:bg-pink-300 hover:text-[#0a192f] hover:font-bold duration-300'>
            <Link className='flex gap-2' to={'/work'}>View Work < HiArrowNarrowRight size={25} /> </Link>
          </button>

          <Menu as="div" className="lg:hidden relative inline-block text-left">
            <div>
              <Menu.Button className='text-white sm:mx-4 border-2 px-6 py-4 my-2 flex item-center gap-2 hover:bg-pink-300 hover:text-[#0a192f] hover:font-bold duration-300'>
                Socials
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <li className='w-[160px] h-[50px] flex justify-between item-center bg-blue-600 rounded-md'>
                        <a className='flex justify-between items-center w-full text-grey-300 '
                          href="https://www.linkedin.com/in/ayush-srivastava-1a66a7223/" target='_blank' rel="noreferrer">
                          Linkedin <FaLinkedin size={30} />
                        </a>
                      </li>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li className='w-[160px] h-[50px] flex justify-between item-center bg-green-400 rounded-md'>
                        <a className='flex justify-between items-center w-full text-grey-300 '
                          href="mailto: ayushsrivastava.0407@gmail.com">
                          Email <HiOutlineMail size={30} />
                        </a>
                      </li>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li className='w-[160px] h-[50px] flex justify-between item-center bg-black rounded-md'>
                        <a className='flex justify-between items-center w-full text-white'
                          href="https://github.com/AyushOJOD/" target='_blank' rel="noreferrer">
                          Github <FaGithub size={30} />
                        </a>
                      </li>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <li className='w-[160px] h-[50px] flex justify-between item-center bg-slate-600 rounded-md'>
                        <a className='flex justify-between items-center w-full text-grey-300 '
                          href="https://drive.google.com/file/d/17PHedGISFVieyamjyXNc5Ypb_eSXAzKc/view?usp=sharing" target='_blank' rel="noreferrer">
                          Resume <BsFillPersonLinesFill size={30} />
                        </a>
                      </li>)}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

    </div>
  )
}

export default Home
