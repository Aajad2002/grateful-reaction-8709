import React from 'react'
import { Alert,AlertIcon,AlertDescription,AlertTitle } from '@chakra-ui/react';

const Alert1 = () => {
  return (
    <div>
      <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
   Order Placed successfully
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for Visiting APNI DUKAAN your order. 
  </AlertDescription>
</Alert>
    </div>
  )
}

export default Alert1