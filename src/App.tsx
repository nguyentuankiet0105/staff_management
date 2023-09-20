import './App.css'
import Table from './components/Table'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import { fetchAllUser } from './services/UserService'

const App = () => {
  const [listUser, setListUser] = useState([])
  const [pagination, setPagination] = useState({
    totalPages: null,
  })

  useEffect(() => {
    getUser(1)
  }, [])

  const getUser = async (page: number) => {
    const res = await fetchAllUser(page)
    if (res && res.data) {
      setListUser(res.data)
      setPagination({ totalPages: res.total_pages })
    }
  }

  const handlePageClick = (e) => {
    getUser(Number(e.selected) + 1)
  }

  return (
    <>
      <Form />
      <Table data={listUser} totalPages={pagination.totalPages} handlePageClick={handlePageClick} />
    </>
  )
}

export default App
