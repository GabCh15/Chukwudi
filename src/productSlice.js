import { createSlice } from '@reduxjs/toolkit';

export const productReducer = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
  },
});


export const { addProduct } = productReducer.actions;

export default productReducer.reducer;
