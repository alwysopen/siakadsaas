import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/users', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    return result.data
  },
  async dataguru () {
    const result = await axios.get(endpoint.apiendpoint + '/users?level=2', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    return result.data
  },
  async datasiswa () {
    const result = await axios.get(endpoint.apiendpoint + '/users?level=3', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/users', data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async updatedecline (id, data) {
    await axios.patch(endpoint.apiendpoint + '/users/' + id, data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async update (data, id) {
    await axios.patch(endpoint.apiendpoint + '/users/' + id, data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}
