import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilters from './c-cpns/entire-filters'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchEntireRoomsAction } from '@/store/modules/entire'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import classNames from 'classnames'

const Entire = memo(() => {
  // 1. 发起action
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomsAction())
    dispatch(changeHeaderConfigAction({
      isFixed: true,
      topAlpha: false
    }))
  }, [dispatch])

  // 2.获取state
  const { entireRooms, headerConfig } = useSelector(state => ({
    entireRooms: state.entire.entireRooms,
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed } = headerConfig

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  return (
    <EntireWrapper className={classNames({ fixed: isFixed })}>
      <EntireFilters isFixed={isFixed}/>
      {
        entireRooms.length > 0 && <EntireRooms entireRooms={entireRooms}/>
      }
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire