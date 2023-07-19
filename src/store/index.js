import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import { entireReduce } from './modules/entire'
import detailReducer from './modules/detail'
import mainReducer from './modules/main'
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReduce,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store