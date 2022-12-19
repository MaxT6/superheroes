// import { createSlice } from "@reduxjs/toolkit" <-- this causes an issue with trying to export down below

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  inputName: "",
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialState, //can use shorthand here and just put the key
  reducers: {
    input: (state, action) => {
      state.inputName = action.payload //This may need to be changed
    }, 
    reset: (state) => {
      state.inputName = ""
    },
  },
})

module.exports = formSlice.reducer
module.exports.formActions = formSlice.actions