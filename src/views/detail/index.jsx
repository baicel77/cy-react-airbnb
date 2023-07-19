import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const { roomDetail = {} } = useSelector(state => ({
    roomDetail: state.detail.roomDetail
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({
      isFixed: false,
      topAlpha: false
    }))
  }, [dispatch])

  return (
    <DetailWrapper>
      {
        !!Object.keys(roomDetail).length && <DetailPictures pictureList={roomDetail.picture_urls}/>
      }
    </DetailWrapper>
  )
})

export default Detail