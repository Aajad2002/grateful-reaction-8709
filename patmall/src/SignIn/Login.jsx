import React, { useEffect, useState ,useContext} from 'react'
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
import { NavLink, Link, Navigate,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
const Login = () => {
    const {username,setUserName,setIsAuth}=useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState("")
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [data, setData] = useState([])
    // console.log(email,password)
    // const isError = input === ''
const navigate=useNavigate()
    useEffect(() => {
        axios.get(`https://sore-pink-giraffe-cuff.cyclic.app/users`).then((res) => setData(res.data))

    }, [])
console.log(email,password)

console.log(data)

    const handleLogin = () => {
        data.map((i) => {
            if (email === i.email && password === i.password) {
                setUserName(i.username);
                setIsAuth(true)
                console.log(email,password);
                // alert('login success')
         return    navigate('/')
        }
    })
}
                    return (
                    <Center flexDirection='column' w={["300px", "400px", "500px"]} m={'auto'} >
                        <Box mt={10}><Heading >Login</Heading></Box>
                        <Box w={"100%"}>
                            <Stack p={10}>

                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                                </FormControl>
                                <FormLabel>Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        value={password} onChange={(e) => setPassword(e.target.value)}
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

                                <Button mt={10} onClick={handleLogin} isDisabled={email === "" || password === "" } colorScheme={'green'}>Login</Button>

                            </Stack>

                        </Box>
                    </Center>




                    )
}

                    export default Login