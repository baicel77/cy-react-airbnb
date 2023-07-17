import React, { memo, useState } from 'react'
import { EntireFiltersWrapper } from './style'
import filtersData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilters = memo(() => {
  const [selectedArray, changeSelectedArray] = useState([])
  const itemClick = item => {
    const index = selectedArray.findIndex(selectedItem => selectedItem === item)
    const newSelectedArray = [...selectedArray]
    if (index === -1) {
      newSelectedArray.push(item)
    } else {
      newSelectedArray.splice(index, 1)
    }
    changeSelectedArray(newSelectedArray)
  }
  return (
    <EntireFiltersWrapper>
      <div className="filter">
        {
          filtersData.map(item => {
            return <div className={classNames('item', { 'active': selectedArray.includes(item) })} key={item} onClick={e => itemClick(item)} >{item}</div>
          })
        }
      </div>
    </EntireFiltersWrapper>
  )
})

export default EntireFilters