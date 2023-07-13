import cyRequest from "../index";

export function fetchGoodPriceList() {
  return cyRequest.get({
    url: '/home/goodprice'
  })
}