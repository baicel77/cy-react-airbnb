import React, { memo, useEffect } from 'react'
import cyRequest from '@/services'

const Home = memo(() => {
  
  useEffect(() => {
    cyRequest.get({ url: "/home/highscore"}).then(res => {
      console.log('res', res)
    })
  }, [])

  return (
    <div>
      <h3>Home~</h3>
    </div>
  )
})

export default Home