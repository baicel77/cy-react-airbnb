import cyRequest from '../'
import { SIZE } from '@/store/modules/entire/constant'

export function fetchEntireRooms(offset = 0, size = SIZE) {
  return cyRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })   
}
