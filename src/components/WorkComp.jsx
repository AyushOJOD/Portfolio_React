import React from 'react';

const WorkComp = ({ Image, Name, description, SampleEmail, SamplePass, Demo, Code }) => {
  return (
    <div className='flex items-center justify-center' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', }}>
      <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            {Name}
          </span>
          <div className='text-md font-bold'>
            {description}
          </div>
          <div className='pt-8 text-center'>

            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              <a href={Demo} target='_blank' rel='noreferrer'>DEMO</a>
            </button>

            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              <a href={Code} target='_blank' rel='noreferrer' >CODE</a>
            </button>

          </div>
          <div>
            <p className='text-sm font-bold gap-4 text-black'>{(SampleEmail) ? "Sample Email:" : null} {SampleEmail}</p>
            <p className='text-sm font-bold gap-4 text-black'>{(SamplePass) ? "Sample Password:" : null} {SamplePass}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComp;
