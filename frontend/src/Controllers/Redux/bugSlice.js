import { createSlice } from '@reduxjs/toolkit'
import { retreiveBugs } from '../bugController'

const slice = createSlice({
  name: 'bug';
  initialState: [],
  reducers: {
    getBugs: state=>retreiveBugs(),
    createBug:(state, actions)=> {
  
},
    updateBugs: (state, actions){

    },
    markComplete: (state, action) => {
      
    }
  }

})

export default slice.reducer;

export const {getBugs,createBugs, updateBug, markComplete } = slice.actions;