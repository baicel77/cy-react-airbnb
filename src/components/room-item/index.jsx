import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'

import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconLeft from '@/assets/svg/icon-left';
import IconRight from '@/assets/svg/icon-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

import { changeRoomDetailAction } from '@/store/modules/detail'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props
  const  [selectedIndex, setSelectedIndex]  = useState(0)
  const carouselRef = useRef()
  const btnClick = (e, isRight) => {
    isRight ? carouselRef.current.next() : carouselRef.current.prev()
    let index = selectedIndex
    isRight ? index++ : index--
    if (index === itemData.picture_urls.length) index = 0
    if (index === -1) index = itemData.picture_urls.length - 1
    setSelectedIndex(index)
    e.stopPropagation()
  }
  const handleDotClick = (e, index) => {
    carouselRef.current.goTo(index)
    setSelectedIndex(index)
    e.stopPropagation()
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSliceItemClick = (item) => {
    dispatch(changeRoomDetailAction(item))
    navigate('/detail')
  }

  return (
    <ItemWrapper color={itemData.verify_info.text_color} itemWidth={itemWidth}>
      <div className="inner">
        {
          !itemData.picture_urls
          ?
          <div className="placeholder">
            <img src={itemData.picture_url} alt="" />
          </div>
          :
          (
            <div className="slice" onClick={ e => handleSliceItemClick(itemData)}>
                <Carousel ref={carouselRef} dots={false}>
                {
                  itemData.picture_urls.map(item => {
                    return (
                      <div className="placeholder" key={item}>
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Carousel>
              <div className="control left" onClick={e => btnClick(e, false)}>
                <IconLeft size={24}/>
              </div>
              <div className="control right" onClick={e => btnClick(e, true)}>
                <IconRight size={24}/>
              </div>
              <div className="dots">
                <Indicator selectedIndex={selectedIndex}>
                  {
                    itemData.picture_urls.map((item, index) => {
                      return (
                        <div className="dots-item" key={item} onClick={e => handleDotClick(e, index)}>
                          <div className={classNames('dot', { active: selectedIndex === index })}></div>
                        </div>
                      )
                    })
                  }
                </Indicator>
              </div>
            </div>
          )
        }
        <div className="desc">{itemData.verify_info.messages.join('·')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating value={itemData.star_rating ?? 5} readOnly precision={0.1} size="small" />
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