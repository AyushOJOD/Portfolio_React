import React from 'react'

const Socials = ({ icon, text, color, link }) => {
    return (
        <li className={`w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 ${color} rounded-md`}>
            <a className='flex justify-between items-center w-full text-grey-300 '
                href={link} target='_blank'>
                {text}
                {icon}
            </a>
        </li>
    )
}

export default Socials
