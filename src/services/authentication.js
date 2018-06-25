import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/users')
    return result.data
  },
  async login (data) {
    const result = await axios.post(endpoint.apiendpoint + '/authentication', data, {
      headers: {
        'content-Type': 'application/json'
      }
    })
    return result.data
  }
}
