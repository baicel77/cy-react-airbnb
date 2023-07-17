import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import { entireReduce } from './modules/entire'
import detailReducer from './modules/detail'
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReduce,
    detail: detailReducer
  }
})

export default store