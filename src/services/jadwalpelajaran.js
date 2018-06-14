import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/jadwalpelajaran')
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/jadwalpelajaran', data)
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/jadwalpelajaran/' + id)
  },
  async update (data, id) {
    await axios.put(endpoint.apiendpoint + '/jadwalpelajaran/' + id, data)
  }
}
