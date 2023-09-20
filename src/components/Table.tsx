import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Button, Center } from '@chakra-ui/react'

type TProps = {
 data: TTable[]
}

type TTable = {
 id: number,
 email: string,
 first_name: string,
 last_name: string,
}


const TableCustom = (props: TProps) => {
 const { data } = props
 return (
  <>
   <TableContainer w="850px">
    <Table variant='striped' size='lg'>
     <Thead>
      <Tr>
       <Th isNumeric><Center>Id</Center></Th>
       <Th><Center>email</Center></Th>
       <Th><Center>firstname</Center></Th>
       <Th><Center>lastname</Center></Th>
       <Th><Center>Action</Center></Th>
      </Tr>
     </Thead>
     <Tbody>
      {data.map(item => (
       <Tr key={item.id}>
        <Td><Center>{item.id}</Center></Td>
        <Td><Center>{item.email}</Center></Td>
        <Td><Center>{item.first_name}</Center></Td>
        <Td><Center>{item.last_name}</Center></Td>
        <Td>
         <Center>
          <Flex gap="10px">
           <Button colorScheme='red' size="sm">Delete</Button>
           <Button colorScheme='yellow' size="sm">Edit</Button>
          </Flex>
         </Center>
        </Td>
       </Tr>
      ))}
     </Tbody>
    </Table>
   </TableContainer>
  </>
 )
}
export default TableCustom