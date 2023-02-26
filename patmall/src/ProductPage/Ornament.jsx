import React, { useEffect, useReducer,useState } from 'react'
import axios from 'axios';
import { Center, SimpleGrid ,Spinner, Stack} from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import Pagination from '../Pagination/Pagination';
import Footer from '../Pages/dm';
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
const Ornament = () => {
    const [page,setPage]=useState(1)
    const [state, dispatch] = useReducer(reducer, intialstate);
    console.log(state)
    const getData = (page) => {
        dispatch({ type: "LOADING", payload: true })
        setTimeout(()=>{
            axios.get(`https://sore-pink-giraffe-cuff.cyclic.app/jewellery?_page=${page}&_limit=40`)
            .then((res) => {
                dispatch({ type: "LOADING", payload: false })

                dispatch({ type: "SUCCESS", payload: res.data })
            }).catch((err) => dispatch({ type: "ERROR", payload: console.log(err) }))
            .finally(() => dispatch({ type: "LOADING", payload: false }))
        },2000)
       
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
         <Center> {state.isLoading?<Spinner w={'100px'} h={'100px'} thickness='8px'
  speed='0.65s'
  emptyColor='gray.200'
  color='green.500'
  size='xl'/>:''}</Center>
          <Stack mt={10}>
          <SimpleGrid columns={[2, 3, 4]} spacing={10}>
            {state.data && state.data.map((item) => {
                return <ProductCard key={item.id} image={item.image} title={item.title}
                 item={item} id={item.id}   description={item.description} price={item.price} />
            })}
        </SimpleGrid>
        <Center>
      <Pagination handlePageChange={handlePageChange} currentPage={page} totalPages={12}/>

        </Center>
          </Stack>
       <Footer/>
      </>
    )
}

export default Ornament