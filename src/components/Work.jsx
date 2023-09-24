import React from 'react'
import Crypto from '../assets/Projects/Crypto.png';
import Todo from '../assets/Projects/Todo.png';
import Weather from '../assets/Projects/Weather.png';
import WorkComp from './WorkComp';
import Portfolio from '../assets/Projects/Portfolio.png';

const Work = () => {
  return (
    <div className='w-full md:h-screen bg-[#0a192f] text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Work</p>
          <p className='py-6'>// Check out some of my recent works</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <WorkComp Image={Crypto} Name={"React Application"} Demo={'https://crypto-web-app-eight.vercel.app'} Code={'https://github.com/AyushOJOD/Crypto_app_react'} />
          <WorkComp Image={Weather} Name={"Api on React"} Demo={'https://weather-app-nu-sable.vercel.app'} Code={'https://github.com/AyushOJOD/Weather_app_react'} />
          <WorkComp Image={Todo} Name={"Full Stack App"} SampleEmail={'Sample@gmail.com'} SamplePass={'Sample@1234'} Demo={'https://todo-mern-vxrj.vercel.app'} Code={'https://github.com/AyushOJOD/todo_MERN'} />
          <WorkComp Image={Portfolio} Name={'Portfolio'} Demo={'https://portfolio-react-ashen-eta.vercel.app'} Code={'https://github.com/AyushOJOD/Portfolio_React'} />
        </div>
      </div>
    </div>
  )
}

export default Work
