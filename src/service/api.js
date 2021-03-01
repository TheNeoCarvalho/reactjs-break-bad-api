import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/characters'
})

export default api
