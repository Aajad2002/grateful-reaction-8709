import React from 'react'
import Grid from '../Components/Grid';
import Question from '../Components/footer';
import Footer from './dm'; 
import Jeweller from './Jeweller';
import image1 from '../Image/footer.png'
import { Image } from '@chakra-ui/react';
const Home = () => {
  return (
   <>
<Grid/>
<Jeweller/>
<Question/>
<Image src={image1}/>
<Footer/>
   </>
  )
}

export default Home