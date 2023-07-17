import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SIZE } from '@/store/modules/entire/constant'
import { fetchEntireRoomsAction } from '@/store/modules/entire';



const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }), shallowEqual)

  const firstPage = currentPage * SIZE + 1
  const lastPage = (currentPage + 1) * SIZE
  const totalPage = Math.ceil(totalCount / SIZE)

  const dispatch = useDispatch()
  const handlePageChange = (_, value) => {
    dispatch(fetchEntireRoomsAction(value - 1))
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  return (
    <EntirePaginationWrapper>
        <Pagination count={totalPage} onChange={handlePageChange} />
        <div className="text">
          {
            `第 ${firstPage} - ${lastPage} 个房源, 共 ${totalCount} 个`
          }
        </div>
    </EntirePaginationWrapper>
  )
})

export default EntirePagination