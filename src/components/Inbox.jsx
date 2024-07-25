import React, { lazy } from 'react'

const Mail = lazy(()=> import('./Mail'));

const Inbox = () => {
    const emails = [
        {
            id: 1,
            nameOfSender: "Atul Prajapati",
            emailId: "atul@gmail.com",
            subject: "Kya re lomdi",
            message: "Hello there",
            time: "25 May"
        },
        {
            id: 2,
            nameOfSender: "Pankaj Verma",
            emailId: "pankaj@gmail.com",
            subject: "Chal chutiye",
            message: "Thik h bhai",
            time: "24 May"
        },
        {
            id: 3,
            nameOfSender: "Mukesh Maddheshiya",
            emailId: "mukesh@gmail.com",
            subject: "Gym join karega?",
            message: "Tere saath nhi karunga",
            time: "23 May"
        },
        {
            id: 4,
            nameOfSender: "Prasoon Pathak",
            emailId: "mukesh@gmail.com",
            subject: "Bhai Job lag gyi",
            message: "I got selected",
            time: "22 May"
        },
        {
            id: 5,
            nameOfSender: "Yash Mishra",
            emailId: "yash@gmail.com",
            subject: "Joining kar liya maine",
            message: "message rhne deta hu",
            time: "21 May"
        },
    ];

  return (
    <div className='w-full p-6'>
        {
            emails?.map((email)=> (
                <Mail key={email.id} email={email} />
            ))
        }
    </div>
  )
}

export default Inbox
