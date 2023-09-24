import React from 'react'

const SkillComp = ({source, alter,tag}) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <img src={source} alt={alter} />
      <p className='my-4'>{tag}</p>
    </div>
  )
}

export default SkillComp
