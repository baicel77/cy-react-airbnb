import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconArea from '@/assets/svg/icon-area'
import IconMenu from '@/assets/svg/icon-menu'
import IconAvatar from '@/assets/svg/icon-avatar'

const HeaderRight = memo(() => {
  const [isShowPanel, changeIsShowPanel] = useState(false)
  useEffect(() => {
    const windowListener = () => {
      changeIsShowPanel(false)
    }
    window.addEventListener('click', windowListener, true)
    return () => {
      window.removeEventListener('click', windowListener, true)
    }
  }, [])
  return (
    <RightWrapper>
      <div className="btns">
        <div className="btn">登录</div>
        <div className="btn">注册</div>
        <div className="btn">
          <IconArea/>
        </div>
      </div>
      <div className="profile" onClick={e => changeIsShowPanel(true)}>
        <div className="menu">
          <IconMenu/>
        </div>
        <div className="avatar">
          <IconAvatar/>
        </div>
        {
          isShowPanel && (
            <div className="panel">
              <div className="top">
                <div className="item">注册</div>
                <div className="item">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight