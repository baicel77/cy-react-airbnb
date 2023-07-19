import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceListAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeSectionV4 from './c-cpns/home-section-v4'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {
  // 1.发起action将数据存到store中
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceListAction())
    dispatch(changeHeaderConfigAction({
      isFixed: true,
      topAlpha: true
    }))
  }, [dispatch])
  // 2. 获取store中数据
  const { goodPriceData, highScoreData, discountData, recommendData, longForData, plusData } = useSelector((state) => ({
    goodPriceData: state.home.goodPriceData,
    highScoreData: state.home.highScoreData,
    discountData: state.home.discountData,
    recommendData: state.home.recommendData,
    longForData: state.home.longForData,
    plusData: state.home.plusData,
  }), shallowEqual)


  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {
          Object.keys(discountData).length > 0 && <HomeSectionV2 sectionInfo={discountData}/>
        }
        {
          Object.keys(recommendData).length > 0 && <HomeSectionV2 sectionInfo={recommendData}/>
        }
        {
          Object.keys(longForData).length > 0 && <HomeSectionV3 sectionInfo={longForData}/>
        }  
        {
          Object.keys(goodPriceData).length > 0 && <HomeSectionV1 sectionInfo={goodPriceData}/>
        }
        {
          Object.keys(highScoreData).length  > 0 && <HomeSectionV1 sectionInfo={highScoreData}/>
        }
        {
          Object.keys(plusData).length > 0 && <HomeSectionV4 sectionInfo={plusData}/>
        }
      </div>
    </HomeWrapper>
  ) 
})

export default Home