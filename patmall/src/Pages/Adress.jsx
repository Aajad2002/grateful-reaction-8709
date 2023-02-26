import React from 'react'
import './Adress.css'
import { Link } from 'react-router-dom'
const Adress = () => {
  return (
   <div id='poncho' >
    <h3 id="h" ><strong>Address for Home Delivery</strong></h3>
  <div id="man">

    <div>

      <label for="">First Name </label>
      <input type="text" placeholder="first name" maxLength="12" required/>
      <label for="">Last Name </label>
      <input type="text" placeholder="last name" maxLength="10"/>


      <label for="">Home Address </label>
      <input type="text" placeholder="Home address"/>

      <label for="">Current Address </label>
      <input type="text" placeholder="Current address"/>

      <label for="">Zip Code</label>
      <input type="text" maxLength="6" placeholder="Area Code"/>
      <label for="">City </label>
      <select id="input">
        <option value="">City Name</option>
        <option value="">Delhi</option>
        <option value="">Mumbai</option>
        <option value="">Jaipur</option>
      </select>

      <label for="">Mobile No. </label>
      <input type="text" maxLength="10" placeholder="mobile number"/>

     <Link to='/payment'>
     <button id="sc" tooltip="Please Check All The Details Carefully !">Save & continue</button>
      
      </Link> 
    </div>
  </div>
   </div>
  )
}

export default Adress