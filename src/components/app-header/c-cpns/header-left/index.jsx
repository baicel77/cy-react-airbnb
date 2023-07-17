import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon-logo'
import { useNavigate } from 'react-router-dom'
 
const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/home')
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={handleLogoClick}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft