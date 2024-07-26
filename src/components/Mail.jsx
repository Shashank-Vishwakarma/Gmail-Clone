import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEmail, setSelectedEmail } from '../redux/slice';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const Mail = ({ email }) => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(setSelectedEmail(email));
        navigateTo(`/mail/${email.id}`);
    }

    const deleteMail = async () => {
        try {
            await deleteDoc(doc(db, "emails", email.id));

            // remove this email from redux store
            dispatch(deleteEmail(email?.id));
        } catch (err) {
            console.log(err);
        }
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

            <div className='p-1 hover:bg-gray-300 rounded-full m-2'>
                <MdDelete size={25} onClick={deleteMail} />
            </div>
        </div>

    )
}

export default Mail
