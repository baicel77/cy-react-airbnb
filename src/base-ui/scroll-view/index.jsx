// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconLeft from '@/assets/svg/icon-left'
import IconRight from '@/assets/svg/icon-right'
const ScrollView = memo((props) => {

  const [isShowRight, changeIsShowRight] = useState(false)
  const [isShowLeft, changeIsShowLeft] = useState(false)
  const [index, changeIndex] = useState(0)
  // const [distance, changeDistance] = useState(0)
  const distanceRef = useRef()
  const scrollRef = useRef()
  
  useEffect(() => {
    const distance = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    distanceRef.current = distance
    // changeDistance(distance)
    changeIsShowRight(distanceRef.current > 0)
  }, [])
  
  const handleControlClick = (isRight) => {
    const newIndex = isRight ? index + 1 : index - 1
    changeIndex(newIndex)
    const offsetLeft = scrollRef.current.children[newIndex].offsetLeft
    scrollRef.current.style.translate = `-${offsetLeft}px`
    changeIsShowLeft(offsetLeft > 0)
    changeIsShowRight(distanceRef.current - offsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>   
      <div className="inner">
        {
          isShowLeft && (
            <div className="btn left" onClick={e => handleControlClick()}>
              <IconLeft/>
            </div>
          )
        }
        {
          isShowRight && (
            <div className="btn right" onClick={e => handleControlClick(true)}>
              <IconRight/>
            </div>
          )
        }
        <div className="tabs" ref={scrollRef}>
          {
            props.children
          }
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

// ScrollView.propTypes = {
//   scrollList: PropTypes.array
// }

export default ScrollView