import {
  CHANGE_ENTIRE_ROOMS,
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_COUNT,
  CHANGE_LOADING
} from './constant'
const initialState = {
  entireRooms: [],
  currentPage: 0,
  totalCount: 0,
  loading: false
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_ENTIRE_ROOMS:
      return { ...state, entireRooms: action.entireRooms }
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case CHANGE_LOADING:
      return { ...state, loading: action.loading }
    default:
      return state
  }
}

export default reducer