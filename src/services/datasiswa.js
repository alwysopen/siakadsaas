import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/siswa')
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/siswa', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/siswa/' + id)
  },
  async update (data, id) {
    await axios.patch(endpoint.apiendpoint + '/siswa/' + id, data)
  },
  async UpdateFoto (data, id) {
    await axios.patch(endpoint.apiendpoint + '/siswa/' + id, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
