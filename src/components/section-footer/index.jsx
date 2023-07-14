import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMore from '@/assets/svg/icon-more'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  const color = !name  ? '#000' : '#00848A'
  const text = <div className="text">{!name ? '显示全部' : `显示更多${name}房源`}</div>

  const navigate = useNavigate()

  const moreClick = () => {
    navigate('/entire')
  }

  return (
    <SectionFooterWrapper color={color}>
      <div className="info" onClick={e => moreClick()}>
        {text}
        <IconMore/>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  type: PropTypes.string
}

export default SectionFooter