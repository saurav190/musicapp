import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({

    name: "Ui",
    initialState: {
        loading: false,
    },
    reducers: {
        enableSpinner: (state) =>{
            state.loading = true;
        },
        disableSpinner: (state)=>{
            state.loading = false;
        }
    },

    

});

export const UiActions = UiSlice.actions;

export default UiSlice;