import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchGoodPriceList } from '@/services/modules/home'
export const fetchGoodPriceListAction = createAsyncThunk('fetchGoodPriceList', async () => {
  const res = await fetchGoodPriceList()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceData: {}
  },
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(fetchGoodPriceListAction.fulfilled, (state, { payload }) => {
      state.goodPriceData = payload
    })
  }
})

export default homeSlice.reducer
export const { aaa = 'aaa'} = homeSlice.actions