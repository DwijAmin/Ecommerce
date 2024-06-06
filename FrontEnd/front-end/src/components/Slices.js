import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  item: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addtobasket: (state, action) => {
      console.log("hii")
      state.item = [...state.item, action.payload]
      console.log(state.item)

    },

    removefrombasket: (state, action) => {
      const index = state.item.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
console.log(index)
      let newBasket = [...state.item]
      if(index >= 0){

        newBasket.splice(index,1)
      }
      else{
        console.warn("cant remove")
      }
      state.item = newBasket;
      console.log(newBasket)
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addtobasket, removefrombasket, gettobasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.item;


export default basketSlice.reducer