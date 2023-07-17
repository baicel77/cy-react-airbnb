import {
  CHANGE_ENTIRE_ROOMS,
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_COUNT,
  CHANGE_LOADING,
  SIZE,
} from './constant'

import { fetchEntireRooms } from '@/services/modules/entire'


function changeEntireRoomsAction(entireRooms) {
  return {
    type: CHANGE_ENTIRE_ROOMS,
    entireRooms
  }
}
function changeCurrentPageAction(currentPage) {
  return {
    type: CHANGE_CURRENT_PAGE,
    currentPage
  }
}
function changeTotalCountAction(totalCount) {
  return {
    type: CHANGE_TOTAL_COUNT,
    totalCount
  }
}

function changeLoadingAction(loading) {
  return {
    type: CHANGE_LOADING,
    loading
  }
}

function fetchEntireRoomsAction(currentPage = 0) {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(currentPage))

    dispatch(changeLoadingAction(true))
    const res = await fetchEntireRooms(currentPage * SIZE)
    dispatch(changeLoadingAction(false))
    
    dispatch(changeEntireRoomsAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}

export {
  changeEntireRoomsAction,
  changeCurrentPageAction,
  changeTotalCountAction,
  fetchEntireRoomsAction,
  changeLoadingAction
}