import React, { useState } from 'react';
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { MdDrafts } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/slice';

const Sidebar = () => {
    const [sidebarElementSelected, setSidebarElementSelected] = useState(0);
    const dispatch = useDispatch();

    const boxes = [
        {
            id: 1,
            icon: <MdInbox size={20} />,
            title: "Inbox"
        },
        {
            id: 2,
            icon: <FaRegStar size={20} />,
            title: "Starred"
        },
        {
            id: 3,
            icon: <IoMdTime size={20} />,
            title: "Snoozed"
        },
        {
            id: 4,
            icon: <LuSendHorizonal size={20} />,
            title: "Sent"
        },
        {
            id: 5,
            icon: <MdDrafts size={20} />,
            title: "Drafts"
        },
        {
            id: 6,
            icon: <MdExpandMore size={20} />,
            title: "More"
        }
    ]

    return (
        <div className='flex flex-col gap-2 justify-start w-1/12 p-2 h-full my-4'>
            <div 
                className='flex items-center gap-4 cursor-pointer rounded-lg p-2 bg-sky-400'
                onClick={()=> dispatch(setOpen(true))}
            >
                <LuPencil size={20} />
                <span>Compose</span>
            </div>
            {
                boxes.map((element, index) => (
                    <div 
                        key={element.id} 
                        className={`${sidebarElementSelected===index ? 'bg-sky-400' : ''} flex gap-4 items-center cursor-pointer p-2 rounded-lg`}
                        onClick={()=> setSidebarElementSelected(index)}
                    >
                        {element.icon}
                        <span>{element.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar
