import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Button, Center } from '@chakra-ui/react'
import ReactPaginate from 'react-paginate';

type TProps = {
 data: TTable[],
 totalPages: number,
 handlePageClick: (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

type TTable = {
 id: number,
 email: string,
 first_name: string,
 last_name: string,
}


const TableCustom = (props: TProps) => {
 const { data, totalPages, handlePageClick } = props

 return (
  <>
   <TableContainer w="850px" mb="20px">
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
   <div className="pagination" style={{justifyContent: 'center'}}>
    <ReactPaginate
     breakLabel="..."
     nextLabel="next >"
     onPageChange={handlePageClick}
     pageRangeDisplayed={5}
     pageCount={totalPages}
     previousLabel="< previous"
     renderOnZeroPageCount={null}

     pageClassName="page-item"
     pageLinkClassName="page-link"
     previousClassName="page-item"
     previousLinkClassName="page-link"
     nextClassName="page-item"
     nextLinkClassName="page-link"
     breakClassName="page-item"
     breakLinkClassName="page-link"
     containerClassName="pagination"
     activeClassName="active"
    />
   </div>
  </>
 )
}
export default TableCustom