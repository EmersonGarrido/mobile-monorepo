import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.carfacts.com.br/v1'
})

export default api
