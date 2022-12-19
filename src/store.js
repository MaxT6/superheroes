const configureStore = require('@reduxjs/toolkit').configureStore;
const formReducer = require('./features/form/formSlice');

const store = configureStore({
  reducer: {
    form: formReducer,
  },
})

module.exports = store