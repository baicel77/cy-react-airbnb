import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { sectionInfo} = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={sectionInfo.title} subtitle={sectionInfo.subtitle}/>
      <SectionRoom roomList={sectionInfo.list} />
      <SectionFooter/>
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  sectionInfo: PropTypes.object
}

export default HomeSectionV1