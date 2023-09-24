import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/e6619a9f-2851-44ea-9e56-7ca536a2c7b0" className='flex flex-col max-w-[800px]'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Reach out to me through the form or Shoot me an Email - <a href="/">ayushsrivastava.0407@gmail.com</a></p>
                </div>

                <input className='bg-[#ccd6fc] rounded-sm p-1' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6fc] rounded-sm' type="text" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6fc] rounded-sm p-2' cols='30' rows='10' placeholder='Message' name='message' />
                <button className='text-white border-2 px-6 py-4 mx-auto  my-2 flex item-center gap-2 hover:bg-pink-300 hover:text-[#0a192f] hover:font-bold duration-300'>Lets's Talk</button>
            </form>
        </div>
    )
}

export default Contact
