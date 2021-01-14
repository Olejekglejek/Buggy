import { } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: [{}],
  reducers: {
    getUsers: (state) => {
      state.push({name:'Ryan'})
      state.push({name:'John'})
    }
  }
})

export default slice.reducer;

export const{getUsers }=slice.actions;