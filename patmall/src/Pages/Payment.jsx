import React, { useState } from 'react'
import './Payment.css'
import { Link, useNavigate } from 'react-router-dom';
import Alert1 from '../SignIn/Alert';
import { Box } from '@chakra-ui/react';
const Payment = () => {
  const navigate=useNavigate()
    const [name,setName]=useState("");
    const [card,setCard]=useState("");
    const [exp,setExp]=useState("");
    const [auth ,setAuth]=useState(false);
    const onClick=()=>{

      setAuth(true);
      setTimeout(()=>{
        navigate('/')
      },2000)
    }
  return (
    auth?<Alert1/>:
    <Box>
  
       <div>
    <h1 id="h">Payment Information</h1>
  </div>
  <div id="main">

    <div id="card1">

      <div id="da">
        <h6> <span id="nam">{name.length===0?'Your Name':name}</span></h6>
        <h6> <span id="num">{card.length===0?'Card Number':card}</span></h6>
        <h6> <span id="e">{exp.length===0?'Exp.Date(mm/yy)':exp}</span></h6>

      </div>

    </div>
    <div id="form">
      <label >Name</label>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" id="name" maxLength="11" required=""/>
      <label >Card Number</label>
      <input value={card} onChange={(e)=>setCard(e.target.value)} type="text" placeholder="Card Number" id="number" maxLength='16' required        />

      <label >Expiration(mm/yy)</label>
      <input value={exp} onChange={(e)=>setExp(e.target.value)} type="text" id="ex"  maxLength="7" required placeholder="Expiration Date" />
      <label >Security code</label>
      <input type="text" id="code" maxLength="3" required placeholder="CVV / Number"/>
  
   <button id="sc" onClick={onClick}>Pay Now</button>
    
    

    </div>

  </div>
    </Box>
  )
}

export default Payment