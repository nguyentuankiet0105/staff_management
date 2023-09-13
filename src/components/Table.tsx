import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Button, Center } from '@chakra-ui/react'

type TProps = {
 data: TTable[]
}

type TTable = {
 no: number,
 id: number,
 username: string,
 role: string
}


const TableCustom = (props: TProps) => {
 const { data } = props
 return (
  <>
   <TableContainer w="850px">
    <Table variant='striped' size='lg'>
     <Thead>
      <Tr>
       <Th isNumeric ><Center>No</Center></Th>
       <Th><Center>Id</Center></Th>
       <Th><Center>Username</Center></Th>
       <Th><Center>Role</Center></Th>
       <Th><Center>Action</Center></Th>
      </Tr>
     </Thead>
     <Tbody>
      {data.map(item => (
       <Tr>
        <Td isNumeric ><Center>{item.no}</Center></Td>
        <Td><Center>{item.id}</Center></Td>
        <Td><Center>{item.username}</Center></Td>
        <Td><Center>{item.role}</Center></Td>
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