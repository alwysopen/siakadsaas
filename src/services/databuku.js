import endpoint from '../api/endpoint'
import axios from 'axios'
export default {
  async list () {
    const result = await axios.get(endpoint.apiendpoint + '/databuku')
    return result.data
  },
  async create (data) {
    await axios.post(endpoint.apiendpoint + '/databuku', data)
  },
  async delete (id) {
    await axios.delete(endpoint.apiendpoint + '/databuku/' + id)
  },
  async update (data, id) {
    await axios.put(endpoint.apiendpoint + '/databuku/' + id, data)
  }
}
