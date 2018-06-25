import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/kelas', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/kelas', data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/kelas/' + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async update (data, id) {
    await axios.put(endpoint.apiendpoint + '/kelas/' + id, data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}
