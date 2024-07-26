import React, { lazy, useEffect, useState } from 'react';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/slice'

const Mail = lazy(() => import('./Mail'));

const Inbox = () => {
    const dispatch = useDispatch();
    const emails = useSelector(store => store.appSlice.emails);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshots = await getDocs(collection(db, "emails"), orderBy("createdAt", "desc"));
            const allEmails = querySnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

            dispatch(setEmails(allEmails));
        }

        fetchData();
    }, []);

    return (
        <div className='w-full p-6'>
            {
                emails?.map((email) => (
                    <Mail key={email.id} email={email} />
                ))
            }
        </div>
    )
}

export default Inbox
