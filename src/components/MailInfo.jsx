import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { deleteEmail } from '../redux/slice';

const MailInfo = () => {
    const { selectedEmail } = useSelector(store => store.appSlice);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const moveToInbox = () => {
        navigateTo('/');
    }

    const deleteMail = async () => {
        try {
            await deleteDoc(doc(db, "emails", selectedEmail?.id));

            // remove this email from redux store
            dispatch(deleteEmail(selectedEmail?.id));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className=' w-full my-8 p-4 flex flex-col gap-4 border border-gray-400 bg-slate-50 rounded-md overflow-y-scroll'>

            <div className='flex fle-row justify-between'>
                <IoIosArrowRoundBack size={25} onClick={moveToInbox} style={{ cursor: 'pointer' }} />
                <div className='p-1 hover:bg-gray-300 rounded-full m-2'>
                    <MdDelete size={25} onClick={deleteMail} />
                </div>
            </div>
            <div className='flex flex-col gap-4 bg-slate-100 p-2'>
                <div className='flex flex-col gap-3'>
                    <span className='mx-10 font-bold text-2xl'>{selectedEmail?.subject}</span>
                    <div className='flex flex-row gap-4'>
                        <FaUserCircle size={25} />
                        <span><b>{selectedEmail?.nameOfSender} </b>{`<${selectedEmail?.to}>`}</span>
                    </div>
                    <span><b>To: </b>{selectedEmail?.to}</span>
                </div>
            </div>

            <div>
                <p>{selectedEmail?.message}</p>
            </div>
        </div>
    )
}

export default MailInfo
