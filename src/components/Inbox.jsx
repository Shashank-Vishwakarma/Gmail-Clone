import React, { lazy, useEffect, useState } from 'react';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/slice'

const Mail = lazy(() => import('./Mail'));

const Inbox = () => {
    const dispatch = useDispatch();
    const emails = useSelector(store => store.appSlice.emails);

    // emails to show in-place of original emails when user searches for an email
    const [tempEmails, setTempEmails] = useState([]);

    const { searchText } = useSelector(store => store.appSlice);

    useEffect(() => {
        const filteredEmails = emails?.filter((email) => {
            return email?.to?.toLowerCase().includes(searchText.toLowerCase())
                || email?.subject?.toLowerCase().includes(searchText.toLowerCase())
                || email?.message?.toLowerCase().includes(searchText.toLowerCase());
        });

        setTempEmails(filteredEmails);
    }, [searchText, emails]);

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
                tempEmails?.map((email) => (
                    <Mail key={email.id} email={email} />
                ))
            }
        </div>
    )
}

export default Inbox
