import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilters from './c-cpns/entire-filters'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchEntireRoomsAction } from '@/store/modules/entire'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const Entire = memo(() => {
  // 1. 发起action
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomsAction())
  }, [dispatch])

  // 2.获取state
  const { entireRooms } = useSelector(state => ({
    entireRooms: state.entire.entireRooms
  }), shallowEqual)

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  return (
    <EntireWrapper>
      <EntireFilters />
      {
        entireRooms.length > 0 && <EntireRooms entireRooms={entireRooms}/>
      }
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire