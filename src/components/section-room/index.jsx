import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper } from './style'
import RoomItem from '../room-item'

const SectionRoom = memo((props) => {
  const { roomList = [] } = props
  console.log('roomList', roomList)
  return (
    <RoomWrapper>
      {
        roomList.slice(0, 8).map(item => {
          return (
            <RoomItem key={item.id} itemData={item}/>
          )
        })
      }
    </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList: PropTypes.array
}

export default SectionRoom