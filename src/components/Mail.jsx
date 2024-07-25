import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const Mail = ({ email }) => {
    return (
        <div className='flex gap-4 items-center relative p-3 my-1 bg-gray-200 hover:shadow-md'>
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
