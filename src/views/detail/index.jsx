import React, { memo } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import { shallowEqual, useSelector } from 'react-redux'

const Detail = memo(() => {
  const { roomDetail = {} } = useSelector(state => ({
    roomDetail: state.detail.roomDetail
  }), shallowEqual)
  return (
    <DetailWrapper>
      {
        !!Object.keys(roomDetail).length && <DetailPictures picturelList={roomDetail.picture_urls}/>
      }
    </DetailWrapper>
  )
})

export default Detail