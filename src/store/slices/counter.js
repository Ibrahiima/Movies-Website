import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counterVal: 0,
  counterQuantity: 10
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increaseCounter: (state, action) => {
      state.counterVal = state.counterVal + 1;
    },
    decreaseCounter: (state, action) => {
      state.counterVal = state.counterVal - 1;
    },
    resetCounter: (state) => {
      state.counterVal = 0;
    },
    increaseByValue: (state, action) => {
      state.counterVal = state.counterVal + action.payload;
    },
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  increaseByValue,
} = counterSlice.actions;

export default counterSlice.reducer;




// const increaseCounter = (payload) => {
//   return {
//     type :"INCREASE_COUNTER",
//     payload
//   }
// }