import axios from './axios'

const fetchAllUser = (page: number) => {
 return axios.get(`/api/users?page=${page}`)
}

export { fetchAllUser }