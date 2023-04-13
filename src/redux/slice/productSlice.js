import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "product",
    initialState : {
        products : [],
        count : 0
    },
    reducers : {
        increaseCount : (state, action) => {
            state.count = state.count + 1
        },
        decreaseCount : (state, action) => {
            state.count = state.count - 1
        },
    }

});


const { actions, reducer } = slice;
const { increaseCount, decreaseCount } = actions;


export {increaseCount, decreaseCount};
export default reducer;