import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/jadwalpelajaran', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/jadwalpelajaran', data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/jadwalpelajaran/' + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async update (data, id) {
    await axios.put(endpoint.apiendpoint + '/jadwalpelajaran/' + id, data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}
