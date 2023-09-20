import {
 FormControl,
 FormLabel,
 Input,
 Button,
} from '@chakra-ui/react'

type TProps = {
 handleSubmit: (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
 handleChange: (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const FormCustom = (props: TProps) => {
 const { handleSubmit, handleChange } = props


 return (
  <>
   <form onSubmit={handleSubmit}>
    <FormControl isRequired className="form-content">
     <FormLabel>Name</FormLabel>
     <Input name="name" placeholder='name' onChange={handleChange} />
    </FormControl>

    <FormControl isRequired className="form-content">
     <FormLabel>Job</FormLabel>
     <Input name="job" placeholder='job' onChange={handleChange} />
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