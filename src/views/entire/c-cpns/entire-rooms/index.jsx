import React, { memo } from 'react'
import { EntireRoomsWrapper } from './style'
import SectionRoom from '@/components/section-room'
import { shallowEqual, useSelector } from 'react-redux'

const EntireRooms = memo((props) => {
  const { entireRooms } = props
  const { loading } = useSelector(state => ({
    loading: state.entire.loading
  }), shallowEqual)

  return (
    <EntireRoomsWrapper>
      <SectionRoom roomList={entireRooms} itemWidth='20%' isEntire={true} />
      {
        loading && <div className="loading"></div>
      }
    </EntireRoomsWrapper>
  )
})

export default EntireRooms