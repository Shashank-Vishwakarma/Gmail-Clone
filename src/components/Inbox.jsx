import React, { lazy } from 'react'

const Mail = lazy(()=> import('./Mail'));

const Inbox = () => {

    const emails = [
        {
            id: 1,
            nameOfSender: "Atul",
            subject: "Kya re lomdi",
            message: "Hello there"
        },
        {
            id: 2,
            nameOfSender: "Pankaj",
            subject: "Chal chutiye",
            message: "Thik h bhai"
        },
        {
            id: 3,
            nameOfSender: "Mukesh",
            subject: "Gym join karega?",
            message: "Tere saath nhi karunga"
        },
    ];

  return (
    <div className='w-full p-6'>
        {
            emails?.map((email)=> (
                <Mail email={email} />
            ))
        }
    </div>
  )
}

export default Inbox
