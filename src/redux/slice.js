import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    emails: [],
    selectedEmail: {},
    searchText: ""
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
        },
        setSearchText: (state, action)=>{
            state.searchText = action.payload;
        }
    }
});

export const { setOpen, setEmails, setSelectedEmail, deleteEmail, setSearchText } = slice.actions;
export default slice.reducer;