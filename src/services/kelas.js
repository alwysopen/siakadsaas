import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/kelas')
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/kelas', data)
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/kelas/' + id)
  },
  async update (data, id) {
    await axios.put(endpoint.apiendpoint + '/kelas/' + id, data)
  }
}
