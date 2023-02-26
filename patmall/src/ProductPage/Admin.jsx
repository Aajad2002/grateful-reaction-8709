import { Center,Select, Stack,Input, Box, Heading, FormLabel, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import Footer from '../Pages/dm';
const Admin = () => {
    const [category,setCategory]=useState("");
    const [image,setImage]=useState("");
    const [title,setTitle]=useState("");
    const [brand,setBrand]=useState("");
    const [price,setPrice]=useState("");
    console.log(category)
    const obj={
        title:title,
        image:image,
        brand:brand,
        price:price,
        
    }
    console.log(obj)
    const handlePost=()=>{
      axios.post(`https://sore-pink-giraffe-cuff.cyclic.app/${category}`,obj)
    }
  return (
    <>
    <Center display={"flex"} flexDirection={'column'}>
       
<Box m={10} >
    <Heading mb={8}>ADD PRODUCT HERE </Heading>
    <Select m={'auto'} mb={10}  onClick={(e)=>setCategory(e.target.value)} placeholder='Please Select The Category Post The Add'>
  <option value='jewellery'>Jewellery</option>
  <option value='furniture'>Furniture</option>
  <option value='option3'>Option 3</option>
</Select>
<Stack spacing={3}>
    
  <Input value={image}    onChange={(e)=>setImage(e.target.value)}  placeholder='Product Image Url'  />
  <Input value={title}    onChange={(e)=>setTitle(e.target.value)}  placeholder='Product Title'  />
  <Input value={brand}    onChange={(e)=>setBrand(e.target.value)}  placeholder='Brand Name' />
  <Input value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder='Price' />
<Button isDisabled={category===""|| image==="" || title===""||brand==="" ||price==="" } onClick={handlePost} colorScheme={'green'}>ADD</Button>
</Stack>
</Box>
    </Center>
    <Footer/>
</>

)
}

export default Admin