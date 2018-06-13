import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/dataguru')
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/dataguru', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/dataguru/' + id)
  },
  async update (data, id) {
    await axios.patch(endpoint.apiendpoint + '/dataguru/' + id, data)
  },
  async UpdateFoto (data, id) {
    await axios.patch(endpoint.apiendpoint + '/dataguru/' + id, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
