import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/datatugas', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/datatugas', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/datatugas/' + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async update (data, id) {
    await axios.patch(endpoint.apiendpoint + '/datatugas/' + id, data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  async UpdateFoto (data, id) {
    await axios.patch(endpoint.apiendpoint + '/datatugas/' + id, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}
