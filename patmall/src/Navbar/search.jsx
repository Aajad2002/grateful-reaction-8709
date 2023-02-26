import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
 Button,
 Input
} from '@chakra-ui/react';
import { MoonIcon, Search2Icon } from '@chakra-ui/icons';


export default function Nav() {
  const navigate=useNavigate()
 const [search,setSearch]=useState('');
 const handleSearch=()=>{
  if(search.toLowerCase()=='furniture'){
    return navigate('/furniture')
  }else if(search.toLowerCase()=='jewellery'){
    return navigate('/ornament')
  }else{
    return navigate('/')
  }
 }
  return (
    <>
      <Box display={'flex'} px={4} w={['50%']} m={'auto'} mt={5}>
      <Input value={search} onChange={(e)=>setSearch(e.target.value)}  type='search' placeholder='Search Here' borderRadius={0}  /><Button onClick={handleSearch}  borderRadius={0} colorScheme={'blue'}><Search2Icon/></Button>
      </Box>
    </>
  );
}