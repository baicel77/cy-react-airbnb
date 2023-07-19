import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { DetailPicturesWrapper } from './style'
import PicturePreview from '@/base-ui/picture-preview'

const DetailPictures = memo((props) => {
  const { pictureList } = props
  const [isShowPicturePreview, setIsShowPicturePreview] = useState(false)

  return (
    <DetailPicturesWrapper>
      <div className="top">
        <div className="left">
          <div className="item" onClick={e => setIsShowPicturePreview(true)}>
            <img src={pictureList[0]} alt=""/>
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            pictureList.slice(1, 5).map((item, index) => {
              return (
                <div className="item" key={index} onClick={e => setIsShowPicturePreview(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-pic' onClick={e => setIsShowPicturePreview(true)}>显示照片</div>
      {
        isShowPicturePreview && (
          <PicturePreview setIsShowPicturePreview={e => setIsShowPicturePreview(false)} pictureList={pictureList}/>
        )
      }
    </DetailPicturesWrapper>
  )
})

DetailPictures.propTypes = {
  pictureList: PropTypes.array
}

export default DetailPictures