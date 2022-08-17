import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: 'loading'
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.items = action.payload
        }
    }
})
export const {getData} = dataSlice.actions
export default dataSlice.reducer