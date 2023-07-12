import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import { entireReduce } from './modules/entire'
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReduce
  }
})

export default store