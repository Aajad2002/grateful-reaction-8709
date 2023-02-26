import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box,Button,Center,Image, Text,VStack } from '@chakra-ui/react'
const ProductCard = ({title,price,description,image,item,id}) => {
  return (
    <RouterLink to={`/ornament/${id}`}>
   <Box bg={'Pink 100'} pb={5} borderRadius="5%" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" width="96%" m={2}>
    <Center>
    <Image src={image} w="100%" borderTopRightRadius="5%" borderTopLeftRadius="5%" />

    </Center>
    <VStack spacing={1} p={1}>
    <Text fontSize={["12px","13px"]} fontWeight="bold">{title}</Text>
   
    <Text  fontSize={"18px"} fontWeight="bold">₹:-{price}</Text>
   <Button colorScheme={
`green`}  >View Details</Button>
     
      
    </VStack>
   </Box>
   </RouterLink>
  )
}

export default ProductCard