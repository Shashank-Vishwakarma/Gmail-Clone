import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    emails: [],
    selectedEmail: {}
};

const slice = createSlice({
    name: "appSlice",
    initialState: initialState,
    reducers: {
        setOpen: (state, action)=>{
            state.open = action.payload;
        },
        setEmails: (state, action)=>{
            state.emails = action.payload;
        },
        setSelectedEmail: (state, action)=>{
            state.selectedEmail = action.payload;
        },
        deleteEmail: (state, action)=>{
            state.emails = state.emails.filter((email)=> email.id !== action.payload);
        }
    }
});

export const { setOpen, setEmails, setSelectedEmail, deleteEmail } = slice.actions;
export default slice.reducer;