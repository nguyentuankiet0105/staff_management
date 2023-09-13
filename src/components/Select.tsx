import {
 Select
} from '@chakra-ui/react'

type TProps = {
 options: TOption[];
 onChange: (e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

type TOption = {
 name: string,
 value: number
}

const SelectCustom = (props: TProps) => {
 const { options, onChange } = props
 return (
  <>
   <Select name="role" onChange={onChange}>
    {options.map((item, index) => (
     <option key={index} value={item.value} >{item.name}</option>
    ))}
   </Select>
  </>
 )
}

export default SelectCustom