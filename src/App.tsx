import './App.css'
import Table from './components/Table'
import Form from './components/Form'

const data = [
  {
    no: 1,
    id: 2,
    username: "string",
    role: "string"
  },
  {
    no: 2,
    id: 3,
    username: "string",
    role: "string"
  }
]
function App() {
  return (
    <>
      <Form/>
      <Table data={data} />
    </>
  )
}

export default App
