import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedEmail } from '../redux/slice';

const Mail = ({ email }) => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(setSelectedEmail(email));
        navigateTo(`/mail/${email.id}`);
    }

    return (
        <div className='flex flex-row gap-2 items-center bg-gray-200'>
            <div
                className='w-full flex gap-4 items-center relative p-3 my-1 bg-gray-200 hover:shadow-md cursor-pointer'
                onClick={openMail}
            >
                <FaRegStar size={20} />
                <span className='font-bold'>{email.nameOfSender}</span>
                <span className='font-medium'>{email.subject}</span>
                <span>{email.message}</span>
                <div className='absolute right-6 flex gap-2 items-center'>
                    <span>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</span>
                </div>
            </div>
        </div>

    )
}

export default Mail
