import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { sectionInfo } = props

  const [name, setName] = useState(sectionInfo.dest_address[0].name)
  const itemClick = useCallback((name) => {
    setName(name)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={sectionInfo.title} subtitle={sectionInfo.subtitle} />
      <SectionTabs tabNames={sectionInfo.dest_address.map(item => item.name)} itemClick={itemClick}/>
      <SectionRoom roomList={sectionInfo.dest_list[name]} itemWidth='33.3%' />
      <SectionFooter name={name}/>
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  sectionInfo: PropTypes.object
}

export default HomeSectionV2