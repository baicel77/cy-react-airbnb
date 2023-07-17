import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailPicturesWrapper } from './style'

const DetailPictures = memo((props) => {
  const { picturelList } = props
  return (
    <DetailPicturesWrapper>
      <div className="top">
        <div className="left">
          <div className="item">
            <img src={picturelList[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            picturelList.slice(1, 5).map((item, index) => {
              return (
                <div className="item" key={index}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </DetailPicturesWrapper>
  )
})

DetailPictures.propTypes = {
  picturelList: PropTypes.array
}

export default DetailPictures