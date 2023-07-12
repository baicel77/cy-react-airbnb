import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class CYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, (err) => {
      return err
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({...config, method: 'get'})
  }
  post(config) {
    return this.request({...config, method: 'post'})
  }
}

const cyRequest = new CYRequest(BASE_URL, TIMEOUT)

export default cyRequest
