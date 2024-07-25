import React from 'react';
import { MdCancel } from "react-icons/md";

const SendEmail = () => {
    return (
        <div className='absolute bottom-2 right-32'>
            <div className='flex flex-col rounded-md gap-2 border-2 border-black w-96 p-2 bg-white'>
                <div className='flex flex-row justify-between'>
                    <span className='font-medium'>New Message</span>
                    <MdCancel size={20} />
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-4 items-center p-1 hover:shadow-md border-2'>
                        <label htmlFor="from">From: </label>
                        <input type="email" placeholder='sender email id' className='outline-none p-1'/>
                    </div>
                    <div className='flex gap-4 items-center p-1 hover:shadow-md border-2'>
                        <label htmlFor="to">To: </label>
                        <input type="email" placeholder='receiver email id' className='outline-none p-1'/>
                    </div>
                    <textarea rows={10}  name="message" placeholder='New message...' className='p-1 outline-none border-2'/>
                    <button className='p-2 bg-sky-400 w-20 rounded-lg font-bold'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SendEmail

