import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';

const MailInfo = () => {
    // const [email, setEmail] = useState({});

    const { id } = useParams();

    const email = {
        id: 3,
        nameOfSender: "Yash Mishra",
        emailId: "yash@gmail.com",
        subject: "Joining kar liya maine",
        message: "message rhne deta hu",
        time: "21 May"
    }

    const navigateTo = useNavigate();

    const moveToInbox = ()=>{
        navigateTo('/');
    }

    return (
        <div className=' w-full my-8 p-4 flex flex-col gap-4 border border-gray-400 bg-slate-50 rounded-md overflow-y-scroll'>
            <IoIosArrowRoundBack size={25} onClick={moveToInbox} style={{ cursor: 'pointer' }}/>
            <div className='flex flex-col gap-4 bg-slate-100 p-2'>
                <div className='flex flex-col gap-3'>
                    <span className='mx-10 font-bold text-2xl'>{email?.subject}</span>
                    <div className='flex flex-row gap-4'>
                        <FaUserCircle size={25} />
                        <span><b>{email?.nameOfSender} </b>{`<${email?.emailId}>`}</span>
                    </div>
                </div>
            </div>

            <div>
                <p>{email?.message}</p>
            </div>
        </div>
    )
}

export default MailInfo
