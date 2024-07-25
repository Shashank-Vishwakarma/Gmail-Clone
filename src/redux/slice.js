import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false
};

const slice = createSlice({
    name: "appSlice",
    initialState: initialState,
    reducers: {
        setOpen: (state, action)=>{
            state.open = action.payload;
        }
    }
});

export const {  } = slice.actions;
export default slice.reducer;