import React from 'react'
import { Box,Center,Image, SimpleGrid ,Text} from '@chakra-ui/react'
import './Jeweller.css'
import { Link } from 'react-router-dom'
const Jeweller = () => {
  return (
    <SimpleGrid mt={20} columns={[2,3,4]} spacing={10} p={4}>
        <Box>
            <Link to='/furniture'>
            <Image className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/498479/1613247367528.png?imwidth=414&impolicy=hq'/>

            </Link>
            <Center><Text fontSize={['20px','30px']}>Big Bazaar</Text></Center>
        </Box>
        <Box>
            <Link to='/furniture'>
            <Image  className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/498482/1620737072141.png?imwidth=414&impolicy=hq'/>

            </Link>
            <Center><Text fontSize={['20px','30px']}>Urban Ladder</Text></Center>
            
        </Box>
        <Box>
            <Link to='/furniture'>
            <Image  className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq'/>

            </Link>
           
            <Center><Text fontSize={['20px','30px']}>@Home</Text></Center>
        
        </Box>
        <Box>
            <Link to='/furniture'>
            <Image  className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq'/>

            </Link>
            <Center><Text fontSize={['20px','30px']}>More</Text></Center>
       
        </Box>
        <Box>
            <Link to='/ornament'>
            <Image  className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/711188/1613028659969.png?imwidth=414&impolicy=hq'/>

            </Link>
            <Center><Text fontSize={['20px','30px']}>Kalyan </Text></Center>
       
        </Box>
        <Box>
         <Link to='/ornament'>
          <Image  className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/711194/1620745874093.jpg?imwidth=414&impolicy=hq'/>
            
            </Link>  
            <Center><Text fontSize={['20px','30px']}>jewlfina</Text></Center>
        
        </Box>
        <Box>
            <Link to='/ornament'>
            <Image  className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/711199/1613028660058.jpg?imwidth=414&impolicy=hq'/>
            
            </Link>
            <Center><Text fontSize={['20px','30px']}>Tanishq</Text></Center>
       
        </Box>
        <Box>
            <Link to ='/ornament'></Link>
            <Image  className='img' src='https://assetscdn1.paytm.com/images/catalog/view_item/711200/1620745456365.jpg?imwidth=414&impolicy=hq'/>
            <Center><Text fontSize={['20px','30px']}>16% Cashback</Text></Center>
        
        </Box>
        
        
    </SimpleGrid>
  )
}

export default Jeweller