import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], itemClick: tabItemClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemClick = (index, name) => {
    setCurrentIndex(index)
    tabItemClick(name)
  }
  return (
    <TabWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return <div className={classNames('item', { active: currentIndex === index })} key={item} onClick={e => itemClick(index, item)}>{item}</div>
          })
        }
      </ScrollView>
    </TabWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs