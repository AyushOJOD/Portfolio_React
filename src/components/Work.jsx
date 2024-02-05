import React from 'react'
import Crypto from '../assets/Projects/Crypto.png';
import Todo from '../assets/Projects/Todo.png';
import Weather from '../assets/Projects/Weather.png';
import WorkComp from './WorkComp';
import Portfolio from '../assets/Projects/Portfolio.png';
import Webpark from '../assets/Projects/Webpark.png'
import Chat from '../assets/Projects/Chat.jpg'

const Work = () => {
  return (
    <div className='w-full md:h-screen bg-[#0a192f] text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-7'>
          <p className='text-4xl font-bold inline  text-gray-300 '>Work</p>
          <p className='py-6'>// Check out some of my recent works</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <WorkComp Image={Webpark} description={"E commerce website"} Name={"Web Park"} Demo={'https://e-commece-mern.vercel.app/'} Code={'https://github.com/AyushOJOD/E-Commece-MERN'} SampleEmail={'demo@gmail.com'} SamplePass={'Demo@1234'} />
          <WorkComp Image={Crypto} description={"Real-time crypto website"} Name={"Crypt Crypto"} Demo={'https://crypto-web-app-eight.vercel.app'} Code={'https://github.com/AyushOJOD/Crypto_app_react'} />
          <WorkComp Image={Weather} description={"Real-time weather app"} Name={"Weather App"} Demo={'https://weather-app-nu-sable.vercel.app'} Code={'https://github.com/AyushOJOD/Weather_app_react'} />
          <WorkComp Image={Todo} description={"TODO App"} Name={"TODO Full Stack"} SampleEmail={'Sample@gmail.com'} SamplePass={'Sample@1234'} Demo={'https://todo-mern-vxrj.vercel.app'} Code={'https://github.com/AyushOJOD/todo_MERN'} />
          <WorkComp Image={Portfolio} Name={'Portfolio'} Demo={'https://portfolio-react-ashen-eta.vercel.app'} Code={'https://github.com/AyushOJOD/Portfolio_React'} />
          <WorkComp Image={Chat} Name={'Chat App'} Demo={'https://youtu.be/xRTAM3BNAS4'} Code={'https://github.com/AyushOJOD/Chatter-Box-server'} />
        </div>
      </div>
    </div>
  )
}

export default Work
