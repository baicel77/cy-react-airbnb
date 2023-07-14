import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LoogforWrapper } from './style'
import LongforItem from '../longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const LoogforRoom = memo((props) => {
  const { longforList } = props
  return (
    <LoogforWrapper>
      <ScrollView>
        {
          longforList.map(item => {
            return <LongforItem itemData={item} key={item.city}/>
          })
        }
      </ScrollView>
    </LoogforWrapper>
  )
})

LoogforRoom.propTypes = {
  longforList: PropTypes.array
}

export default LoogforRoom