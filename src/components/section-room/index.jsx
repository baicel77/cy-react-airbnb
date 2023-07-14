import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper } from './style'
import RoomItem from '../room-item'
import ScrollView from '@/base-ui/scroll-view'

const SectionRoom = memo((props) => {
  const { roomList = [], itemWidth = '25%', isScroll = false } = props
  const list = (
    roomList.slice(0, 8).map(item => {
      return (
        <RoomItem key={item.id} itemData={item} itemWidth={itemWidth}/>
      )
    })
  )
  return (
    <RoomWrapper>
      {!isScroll ? list : <ScrollView>{list}</ScrollView>}
    </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList: PropTypes.array
}

export default SectionRoom