import './App.css'
import Table from './components/Table'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import { createUser, fetchAllUser } from './services/UserService'
import { getName } from './helper/getName'

const App = () => {
  const [listUser, setListUser] = useState([])
  const [pagination, setPagination] = useState({
    totalPages: null,
  })
  const [user, setUser] = useState({
    name: "",
    job: ""
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

  const addUser = async (e) => {
    e.preventDefault()
    await createUser(user).then((res) => {
      const { first_name, last_name } = getName(user.name);
      setListUser([
        {
          id: res.id,
          email: user.job,
          first_name: first_name,
          last_name: last_name
        },
        ...listUser
      ])
    }).catch((err) => {
      console.log("err:", err)
    });
  }


  const handlePageClick = (e) => {
    getUser(Number(e.selected) + 1)
  }
  const handleChange = (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    setUser((pre) => ({
      ...pre,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Form handleChange={handleChange} handleSubmit={addUser} />
      <Table data={listUser} totalPages={pagination.totalPages} handlePageClick={handlePageClick} />
    </>
  )
}

export default App
