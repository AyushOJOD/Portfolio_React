import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import firebase from '../assets/firebase.png';
import flutter from '../assets/flutter.png';
import github from '../assets/github.png';
import JS from '../assets/javascript.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import SkillComp from './SkillComp';

const Skills = () => {
  return (
    <div className='w-full min-h-screen bg-[#0a192f]'>

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
        <div className='mt-9'>
          <p className='text-4xl font-bold inline'>Experience</p>
          <p className='py-4 '>// These are the technologies I have worked with</p>

        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <SkillComp source={HTML} alter={"HTML"} tag={"HTMl"} />
          <SkillComp source={CSS} alter={"CSS"} tag={"CSS"} />
          <SkillComp source={firebase} alter={"Firebase"} tag={"firebase"} />
          <SkillComp source={flutter} alter={"Flutter"} tag={"Flutter"} />
          <SkillComp source={github} alter={"GitHub"} tag={"GitHub"} />
          <SkillComp source={react} alter={"React Js"} tag={'React Js'} />
          <SkillComp source={JS} alter={"JavaScript"} tag={"JavaScripy"} />
          <SkillComp source={mongo} alter={"Mongo"} tag={"MongoDB"} />
          <SkillComp source={node} alter={"Node"} tag={"Node.js"} />
          <SkillComp source={tailwind} alter={"Tailwind"} tag={"TailWind"} />
        </div>
      </div>
    </div>
  )
}

export default Skills
