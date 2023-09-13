import axios from 'axios';

const api = axios.create({
 baseURL: 'https://reqres.in/api',
});

export const getUsers = async () => {
 try {
  const res = await api.get('/users');
  return res.data.data;
 } catch (error) {
  throw error;
 }
};