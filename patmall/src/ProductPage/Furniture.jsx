import React, { useEffect, useReducer,useState } from 'react'
import axios from 'axios';
import { Box,Button,Center,Image, Text,VStack, SimpleGrid ,Spinner } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'


// import ProductCard from '../Components/ProductCard';
import Pagination from '../Pagination/Pagination';
const intialstate = {
    data: [],
    isLoading: false,
    error: false
}
const reducer = (state, { type, payload }) => {
    switch (type) {
        case "LOADING": {
            return { ...state, isLoading: payload, error: false }
        }
        case "SUCCESS": {
            return { ...state, isLoading: false, data: payload, error: false }
        }
        case "ERROR": {
            return { ...state, isLoading: false, data: [], error: payload }
        }
    }

}
const Furniture = () => {
    const [page,setPage]=useState(1)
    const [state, dispatch] = useReducer(reducer, intialstate);
    console.log(state)
    const getData = (page) => {
        dispatch({ type: "LOADING", payload: true })
        // setTimeout(()=>{},200)
        axios.get(`https://quikr.onrender.com/Furniture?_page=${page}&_limit=40`)
            .then((res) => {
                dispatch({ type: "LOADING", payload: false })

                dispatch({ type: "SUCCESS", payload: res.data })
            }).catch((err) => dispatch({ type: "ERROR", payload: console.log(err) }))
            .finally(() => dispatch({ type: "LOADING", payload: false }))
    }
    useEffect(() => {
        getData(page)
    }, [page])
    console.log(state.data)
    const handleAdd=(data)=>{
        localStorage.setItem("cart",JSON.stringify(data));
       
    }
    const handlePageChange=(i)=>{
        setPage(i)
     }
    return (
<>
<Center m={5}> {state.isLoading?<Spinner w={'100px'} h={'100px'} thickness='8px'
  speed='0.65s'
  emptyColor='gray.200'
  color='green.500'
  size='xl'/>:''}</Center>
        <SimpleGrid columns={[2, 3, 4]} spacing={10}>
            {state.data && state.data.map((item) => {
                return  <RouterLink to={`/furniture/${item.id}`} key={Math.random()*1000}>
                <Box bg={'Pink 100'} pb={5} borderRadius="5%" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" width="96%" m={2}>
                 <Center>
                 <Image src={item.image} w="100%" borderTopRightRadius="5%" borderTopLeftRadius="5%" />
             
                 </Center>
                 <VStack spacing={1} p={1}>
                 <Text fontSize={["12px","13px"]} fontWeight="bold">{item.title}</Text>
                
                 <Text  fontSize={"18px"} fontWeight="bold">₹:-{item.price}</Text>
                <Button colorScheme={
             `green`}  >View Details</Button>
                  
                   
                 </VStack>
                </Box>
                </RouterLink>})}
        </SimpleGrid>
        <Center>
      <Pagination handlePageChange={handlePageChange} currentPage={page} totalPages={11}/>

        </Center>
      </>
    )
}

export default Furniture