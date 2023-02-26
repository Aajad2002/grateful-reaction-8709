import React ,{useState}from 'react'
import { Stack,Center ,Button} from '@chakra-ui/react';
import Login from './Login';
import Signup from './Signup';
const UserPage = () => {
    const [isAuth,setIsAuth]=useState(false);
    console.log(isAuth)
      return (
        <Stack p={5} >
          <Center>
            <Button colorScheme={"orange"} p={5} width={["150px","170px"]}  value={isAuth} onClick={()=>setIsAuth(!isAuth)} className="toggleForm">{isAuth?"Sign Up":"Login"}</Button>
          </Center>
    <Center>
    {isAuth?<Login/>:<Signup/>}

    </Center>
          {/* toggle between form and dashboard */}
        </Stack>
      )
}

export default UserPage