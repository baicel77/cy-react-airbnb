import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV4Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionFooter from '@/components/section-footer'
const HomeSectionV4 = memo((props) => {
  const { sectionInfo } = props
  return (
    <HomeSectionV4Wrapper>
      <SectionHeader title={sectionInfo.title} subtitle={sectionInfo.subtitle}/>
      <SectionRoom roomList={sectionInfo.list} itemWidth='20%' isScroll={true} />
      <SectionFooter name='plus'/>
    </HomeSectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  sectionInfo: PropTypes.object
}

export default HomeSectionV4