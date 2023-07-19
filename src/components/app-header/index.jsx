import React, { memo, useRef, useState } from 'react'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScroll } from '@/hooks'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  // props/state
  const [isShowSearch, setIsShowSearch] = useState(false)
  const { scrollY } = useScroll()
  const lastScrollYRef = useRef()

  if (!isShowSearch) lastScrollYRef.current = scrollY
  if (isShowSearch && Math.abs(lastScrollYRef.current - scrollY) > 100) {
    setIsShowSearch(false)
  } 

  // redux
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})} isShowSearch={isShowSearch}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter setIsShowSearch={setIsShowSearch} isShowSearch={isAlpha || isShowSearch}/>
            <HeaderRight/>
          </div>
          <div className="bottom"></div>
        </div>
        {
          isShowSearch && <div className="cover" onClick={e => setIsShowSearch(false)}></div>
        }
      </HeaderWrapper>
    </ThemeProvider>
    
  )
})

export default AppHeader