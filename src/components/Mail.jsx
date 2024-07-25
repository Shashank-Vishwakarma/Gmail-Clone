import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Mail = ({ email }) => {
    const navigateTo = useNavigate();

    const openMail = ()=>{
        navigateTo(`/mail/${email.id}`)
    }

    return (
        <div 
            className='w-full flex gap-4 items-center relative p-3 my-1 bg-gray-200 hover:shadow-md cursor-pointer'
            onClick={openMail}
        >
            <FaRegStar size={20} />
            <span className='font-bold'>{email.nameOfSender}</span>
            <span className='font-medium'>{email.subject}</span>
            <span>{email.message}</span>
            <div className='absolute right-6 flex gap-2 items-center'>
                <MdDelete size={20} />
                <span>{email.time}</span>
            </div>
        </div>
    )
}

export default Mail
