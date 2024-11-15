import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6bb2f917567a40fa87f243c38f45b094',
  },
})