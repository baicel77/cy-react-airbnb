import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectedIndex } = props
  const indicatorRef = useRef()
  useEffect(() => {
    const targetOffsetLeft = indicatorRef.current.children[selectedIndex].offsetLeft
    const itemWidth = indicatorRef.current.children[selectedIndex].clientWidth
    const scrollWidth = indicatorRef.current.scrollWidth
    const indicatorWidth = indicatorRef.current.clientWidth
    let scrollDistance = targetOffsetLeft + itemWidth * 0.5 - indicatorWidth * 0.5
    
    if (scrollDistance < 0) scrollDistance = 0
    if (scrollWidth - scrollDistance < indicatorWidth) {
      scrollDistance = scrollDistance - itemWidth
      return
    }
    indicatorRef.current.style.transform = `translateX(${-scrollDistance}px)`
  }, [selectedIndex])

  return (
    <IndicatorWrapper>
      <div className="indicator" ref={indicatorRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number
}

export default Indicator