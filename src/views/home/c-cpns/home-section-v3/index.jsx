import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import LoogforRoom from '@/components/loogfor-room'

const HomeSectionV3 = memo((props) => {
  const { sectionInfo } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={sectionInfo.title} subtitle={sectionInfo.subtitle} />
      <LoogforRoom longforList={sectionInfo.list}/>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  sectionInfo: PropTypes.object
}

export default HomeSectionV3