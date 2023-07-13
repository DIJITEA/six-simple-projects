import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SwitcherState{
    value: number;
}
const initialState: SwitcherState = {
    value: 1,
}

export const SwitcherStateSlice = createSlice({
    name: "switcher",
    initialState,
    reducers: {
        SwitcherUpdate: (state, action:PayloadAction<number>) =>{
            state.value = action.payload
        }
    }
})

export const {SwitcherUpdate} = SwitcherStateSlice.actions

export default SwitcherStateSlice.reducer