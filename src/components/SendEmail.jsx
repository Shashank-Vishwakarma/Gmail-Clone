import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/slice';
import { db } from '../firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendEmail = () => {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "emails"), {
                to: to,
                subject: subject,
                message: message,
                createdAt: serverTimestamp()
            });

            setTo("");
            setSubject("");
            setMessage("");

            dispatch(setOpen(false));
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='absolute bottom-2 right-32'>
            <div className='flex flex-col rounded-md gap-2 border-2 border-black w-96 p-2 bg-white'>
                <div className='flex flex-row justify-between'>
                    <span className='font-medium'>New Message</span>
                    <MdCancel size={20} onClick={() => dispatch(setOpen(false))} />
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <input value={to} onChange={(e) => setTo(e.target.value)} type="email" placeholder='To' className='outline-none p-1' />
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject' className='outline-none p-1' />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={10} name="message" placeholder='New message...' className='p-1 outline-none border-2' />
                    <button type='submit' className='p-2 bg-sky-400 w-20 rounded-lg font-bold'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SendEmail

