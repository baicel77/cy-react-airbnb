import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceListAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'


const Home = memo(() => {
  // 1.发起action将数据存到store中
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceListAction())
  }, [dispatch])
  // 2. 获取store中数据
  const { goodPriceData } = useSelector((state) => ({
    goodPriceData: state.home.goodPriceData
  }), shallowEqual)


  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceData.title} />
          <SectionRoom roomList={goodPriceData.list} />
        </div>
      </div>
    </HomeWrapper>
  ) 
})

export default Home