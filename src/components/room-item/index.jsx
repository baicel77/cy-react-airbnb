import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

import Rating from '@mui/material/Rating';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props
  return (
    <ItemWrapper color={itemData.verify_info.text_color} itemWidth={itemWidth}>
      <div className="inner">
        <div className="placeholder">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join('·')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating value={5} readOnly precision={0.1} size="small" />
          <div className="count">{itemData.reviews_count}</div>
          {
            itemData.bottom_info?.content && (
              <div className="lord">·{itemData.bottom_info.content}</div>
            )
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem