import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { PicturePreviewWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconLeft from '@/assets/svg/icon-left'
import IconRight from '@/assets/svg/icon-right'
import IconArrowDown from '@/assets/svg/icon-arrow-down'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconArrowUp from '@/assets/svg/icon-arrow-up'

const PicturePreview = memo((props) => {
  // props/status
  const { setIsShowPicturePreview, pictureList } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [isShowIndicator, setIsShowIndicator] = useState(true)
  // 事件监听
  const handleCloseBtnClick = () => {
    setIsShowPicturePreview && setIsShowPicturePreview()
  }
  const handleBtnClick = (isNext) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex === -1) newIndex = pictureList.length - 1
    if (newIndex === pictureList.length) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }
  const handleItemClick = index => {
    setCurrentIndex(index)
    setIsNext(index > currentIndex)
  }
  const handleToggleList = () => {
    setIsShowIndicator(!isShowIndicator)
  }

  return (
    <PicturePreviewWrapper isNext={isNext} isShowIndicator={isShowIndicator}>
      <div className="top">
        <div className="close-btn" onClick={handleCloseBtnClick}>
          <IconClose/>
        </div>
      </div>
      <div className="content">
        <div className="btn left" onClick={e => handleBtnClick(false)}>
          <IconLeft size='77'/>
        </div>
        <div className="btn right" onClick={e => handleBtnClick(true)}>
          <IconRight size='77'/>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition key={pictureList[currentIndex]} timeout={250} classNames='switch'>
              <img src={pictureList[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="bottom">
        <div className="info">
        <div className="desc">
          <span>{ `${currentIndex + 1}/${pictureList.length}:room apartment图片${currentIndex + 1}` }</span>
        </div>
          <div className="toggle" onClick={e => handleToggleList()}>
          <span>{`${isShowIndicator ? '隐藏' : '显示'}照片列表`}</span>
          {
            isShowIndicator ? <IconArrowDown/> : <IconArrowUp/>
          }
        </div>
        </div>
        <div className="list">
          <Indicator selectedIndex={currentIndex}>
            {
              pictureList.map((item, index) => {
                return (
                  <div className={classNames('item', { active: currentIndex === index })} key={item} onClick={e => handleItemClick(index)}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Indicator>
        </div>
      </div>
    </PicturePreviewWrapper>
  )
})

PicturePreview.propTypes = {
  pictureList: PropTypes.array
}

export default PicturePreview