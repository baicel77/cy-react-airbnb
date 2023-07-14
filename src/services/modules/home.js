import cyRequest from "../index";

export function fetchGoodPriceList() {
  return cyRequest.get({
    url: '/home/goodprice'
  })
}

export function fetchHighScoreList() {
  return cyRequest.get({
    url: '/home/highscore'
  })
}

export function fetchDiscountList() {
  return cyRequest.get({
    url: '/home/discount'
  })
}

export function fetchRecommendList() {
  return cyRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function fetchLongForList() {
  return cyRequest.get({
    url: '/home/longfor'
  })
}

export function fetchPlusList() {
  return cyRequest.get({
    url: '/home/plus'
  })
}