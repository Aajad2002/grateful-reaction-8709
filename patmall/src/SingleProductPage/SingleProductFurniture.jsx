import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import {Link as Navlink} from 'react-router-dom'
const SingleProductFurniture = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://quikr.onrender.com/Furniture/${id}`).then((res) => setData(res.data))
    }, [id])
    const { title, Category1, image, price, description } = data
    return (
        <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {title}
              </Heading>
              <Text
              mt={5}
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ₹:-{price} only
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 It should be easy to get a sofa and GLOSTAD sofa is easy to buy, bring home, assemble and live with. So you can enjoy more time and space to hang out with friends and family and do other important things.
                </Text>
               
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Armrest height: 57 cm (22 1/2 ")</ListItem>
                    <ListItem>Armrest width: 3.5 cm (1 3/8 ")</ListItem>{' '}
                    <ListItem>Depth: 78 cm (30 3/4 ")</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Free height under furniture: 23 cm (9 ")</ListItem>
                    <ListItem>Height backrest: 68 cm (26 3/4 ")</ListItem>
                    <ListItem>Quantity:- 1N</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            
            </Stack>
  <Navlink to='/adress'>
  <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Buy Now
            </Button>
  </Navlink>
            
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              {/* <MdLocalShipping /> */}
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
       )
}


export default SingleProductFurniture