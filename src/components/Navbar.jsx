import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import Socials from './Socials';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
      <div>
        <img src={logo} alt="logo" style={{ width: '200px' }} />
      </div>
      <ul className='hidden md:flex gap-6'>
        <Link to={'/'} >Home</Link>
        <Link to={'/about'} >About</Link>
        <Link to={'/skills'} >Skills</Link>
        <Link to={'/work'}>Projects</Link>
        <Link to={'/contact'}>Contact</Link>
      </ul>

      {/*Menu for Mobile*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to={'/'}>Home</Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to={'/about'}>About</Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to={'/skills'}>Skills</Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to={'/work'}>Projects</Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>

      {/*Social Icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <Socials icon={<FaLinkedin size={30} />} text={'LinkedIn'} color={'bg-blue-600'} link={"https://www.linkedin.com/in/ayush-srivastava-1a66a7223/"} />
          <Socials icon={<FaGithub size={30} />} text={'Github'} color={'bg-black'} link={"https://github.com/AyushOJOD/"} />
          <Socials icon={<HiOutlineMail size={30} />} text={'Email'} color={'bg-green-400'} link={"mailto: ayushsrivastava.0407@gmail.com"} />
          <Socials icon={<BsFillPersonLinesFill size={30} />} text={'Resume'} color={'bg-slate-600'} link={"https://drive.google.com/file/d/1fk5yy2rInsgEe9RiHpN_zZATtlCUHk3l/view?usp=drive_link"} />

        </ul>
      </div>
    </div>
  )
}

export default Navbar



/*
 <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md'>
            <a className='flex justify-between items-center w-full text-grey-300 '
              href="https://www.linkedin.com/in/ayush-srivastava-1a66a7223/" target='_blank'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black rounded-md'>
            <a className='flex justify-between items-center w-full text-grey-300 '
              href="https://github.com/AyushOJOD/" target='_blank'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400 rounded-md'>
            <a className='flex justify-between items-center w-full text-grey-300 '
              href="mailto: ayushsrivastava.0407@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600 rounded-md'>
            <a className='flex justify-between items-center w-full text-grey-300 '
              href="https://drive.google.com/file/d/1vD7wSIkvx17c5Gv-D6Rji0J7olHoIwaj/view?usp=drive_link" target='_blank'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

*/