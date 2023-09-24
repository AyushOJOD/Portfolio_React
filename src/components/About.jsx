import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-grey-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>  
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-white'>About</p>
                </div>
                <div></div>
            </div>


            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
                <div className='sm:text-4xl font-bold text-white'>
                    <p>Hi. I'm Ayush, nice to meet you. Please take a look around</p>
                </div>
                <div className='sm:text-3xl text-white'>
                    <p>
                    As a full-stack developer, my portfolio showcases a diverse range of web projects, highlighting my proficiency in front-end technologies like HTML, CSS, and JavaScript, as well as back-end skills using frameworks like Node.js. Explore my portfolio to witness my passion for crafting engaging and efficient digital experiences.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
