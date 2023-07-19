import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon-search'
import searchData from '@/assets/data/search_titles.json'
import classNames from 'classnames'

const HeaderCenter = memo((props) => {
  const tabNames = searchData.map(item => item.title)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { setIsShowSearch, isShowSearch } = props
  return (
    <CenterWrapper>
      
      <CSSTransition in={!isShowSearch} timeout={250} classNames='bar' unmountOnExit={true}>
        <div className="search-bar" onClick={e => setIsShowSearch(true)}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isShowSearch} timeout={250} classNames='tab' unmountOnExit={true}>
        <div className="tab">
          <div className="name">
            {
              tabNames.map((item, index) => {
                return <div key={item} className={classNames('item', { active: currentIndex === index })} onClick={e => setCurrentIndex(index)}>{item}</div>
              })
            }
          </div>
          <div className="info">
            {
              searchData[currentIndex].searchInfos.map(item => {
                return (
                  <div className="inner" key={item.title}>
                    <div className="item">
                      <div className="title">{item.title}</div>
                      <div className="desc">{item.desc}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </CSSTransition>
    
    </CenterWrapper>
  )
})


export default HeaderCenter