import axios from './axios'
import { TUser } from '../constant/user.type'

const fetchAllUser = (page: number) => {
 return axios.get(`/api/users?page=${page}`)
}

const createUser = (user: TUser) => {
 return axios.post("api/users", user)

}

export { fetchAllUser, createUser }