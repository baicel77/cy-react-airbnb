import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchGoodPriceList, fetchHighScoreList, fetchDiscountList, fetchRecommendList, fetchLongForList, fetchPlusList } from '@/services/modules/home'
export const fetchGoodPriceListAction = createAsyncThunk('fetchGoodPriceList', (extraInfo, { dispatch, getState }) => {
  fetchGoodPriceList().then(res => {
    dispatch(changeGoodPriceListAction(res))
  })
  fetchHighScoreList().then(res => {
    dispatch(changeHighScoreListAction(res))
  })
  fetchDiscountList().then(res => {
    dispatch(changeDiscountListAction(res))
  })
  fetchRecommendList().then(res => {
    dispatch(changeRecommendListAction(res))
  })
  fetchLongForList().then(res => {
    dispatch(changeLongForListAction(res))
  })
  fetchPlusList().then(res => {
    dispatch(changePlusListAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceData: {},
    highScoreData: {},
    discountData: {},
    recommendData: {},
    longForData: {},
    plusData: {}
  },
  reducers: {
    changeGoodPriceListAction(state, { payload }) {
      state.goodPriceData = payload
    },
    changeHighScoreListAction(state, { payload }) {
      state.highScoreData = payload
    },
    changeDiscountListAction(state, { payload }) {
      state.discountData = payload
    },
    changeRecommendListAction(state, { payload }) {
      state.recommendData = payload
    },
    changeLongForListAction(state, { payload }) {
      state.longForData = payload
    },
    changePlusListAction(state, { payload }) {
      state.plusData = payload
    }
  },
  // extraReducers(builder) {
  //   builder.addCase(fetchGoodPriceListAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceData = payload
  //   })
  // }
})

export default homeSlice.reducer
export const { changeGoodPriceListAction, changeHighScoreListAction, changeDiscountListAction, changeRecommendListAction, changeLongForListAction, changePlusListAction } = homeSlice.actions