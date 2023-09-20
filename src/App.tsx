import './App.css'
import Table from './components/Table'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import { fetchAllUser } from './services/UserService'

const App = () => {
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const res = await fetchAllUser()
    if (res && res.data) {
      setListUser(res.data)
    }
  }

  return (
    <>
      <Form />
      <Table data={listUser} />
    </>
  )
}

export default App
