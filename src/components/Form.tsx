import {
 FormControl,
 FormLabel,
 Input,
 Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import Select from './Select'
import { formVariables } from '../constant/form.variables'

const FormCustom = () => {
 const [formData, setFormData] = useState({
  id: null,
  username: '',
  role: null
 })

 const handleChange = (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
  setFormData((pre) => ({
   ...pre,
   [e.target.name]: e.target.value
  }))
 }
 const handleSubmit = (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
  e.preventDefault();
  console.log(formData);
 }


 return (
  <>
   <form onSubmit={handleSubmit}>
    <FormControl isRequired className="form-content">
     <FormLabel>Id</FormLabel>
     <Input name="id" placeholder='Id' onChange={handleChange} />
    </FormControl>

    <FormControl isRequired className="form-content">
     <FormLabel>Username</FormLabel>
     <Input name="username" placeholder='username' onChange={handleChange} />
    </FormControl>

    <FormControl isRequired className="form-content">
     <FormLabel>Role</FormLabel>
     <Select name="role" options={formVariables.OPTION_SELECT} onChange={handleChange} />
    </FormControl>

    <Button
     mt={4}
     colorScheme='teal'
     isLoading={false}
     type='submit'
    >
     Submit
    </Button>
   </form>
  </>
 )
}

export default FormCustom