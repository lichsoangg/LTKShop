import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'product',
  initialState: {
    carts: [],
    likes: [],
    count: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = {...action.payload, qty: 1};
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    },
    likeCart: (state, action) => {
      const itemIndex = state.likes.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.likes[itemIndex].qty += 1;
      } else {
        const temp = {...action.payload, qty: 1};
        return {
          ...state,
          likes: [...state.likes, temp],
        };
      }
    },
    rmCart: (state, action) => {
      const items = state.carts.findIndex((item) => item.id === action.payload.id);
      if (items >= 0) {
        if (state.carts[items].qty > 1) {
          state.carts[items].qty -= 1;
        }
      } else {
        const temp = {...action.payload, qty: 1};
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    },

    removeCartItems: (state, action) => {
      const removeItem = state.carts.filter((item) => item.id !== action.payload);
      state.carts = removeItem;
    },
  },
});

const {actions, reducer} = slice;
const {removeCartItems, removeCart, addCart, rmCart, likeCart} = actions;

export {removeCartItems, removeCart, addCart, rmCart, likeCart};
export default reducer;
