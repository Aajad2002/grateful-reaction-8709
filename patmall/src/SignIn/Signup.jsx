import React, { useState } from 'react'
import { PhoneIcon } from '@chakra-ui/icons';
import axios from 'axios'
import {
    InputLeftElement,
    Input,
    FormControl,
    FormLabel,
   
    Box,
   
    Button,
    InputRightElement,
    InputGroup,
    
    Center,
    Stack,
    Heading,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [mobile,setMobile]=useState("")
    const [show, setShow] = useState(false)
    const [text,setText]=useState("")
    const handleClick = () => setShow(!show)
   
console.log(text,email,password,mobile)
    // const isError = input === ''


    let count=4

  const handleSubmit=()=>{
    
    const obj={username:text,email:email,password:password,mobile:mobile};
   console.log(obj)
    console.log(count)
    axios.post(`https://sore-pink-giraffe-cuff.cyclic.app/users`,obj).then(()=>{});
    
}
    return (
        <Center flexDirection='column' w={["300px","400px","500px"]}  m={'auto'} >
           <Box mt={10}><Heading >Sign up</Heading></Box> 
            <Box w={"100%"}>
                <Stack p={10}>
                <FormControl isRequired>
                        <FormLabel color={'#333'}>User Name</FormLabel>
                        <Input type='text' value={text} onChange={(e)=>setText(e.target.value)} />

                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel color={'#333'}>Email</FormLabel>
                        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

                    </FormControl>
                    <FormLabel color={'#333'}>Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement

                            pointerEvents='none'
                            children={<PhoneIcon color={'green'} />}

                        />
                        <Input type='tel' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='+91 Phone number' maxLength={10} isRequired />
                    </InputGroup>
                <Button mt={10} onClick={handleSubmit} isDisabled={text==="" ||email==="" || password==="" ||password.length<8 || mobile==="" || mobile.length!==10} colorScheme={'green'}><NavLink to='/login'>Sign Up</NavLink></Button>

                </Stack>

            </Box>
        </Center>




    )
}

export default Signup