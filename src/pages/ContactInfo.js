import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom';

const ContactInfo = () => {
    const users = require("../data/users.json")
    const navigate  = useNavigate()
    const location = useLocation();
    const selectedUser = users.find((item)=>item.phoneNo === location.state)
  return (
    <div className='users'>
      <ul>
        <li>{selectedUser?.firstName} {selectedUser?.lastName}</li>
        <li>{selectedUser?.phoneNo}</li>
        {/* passign the phone number to the next page */}
        <button className='contactButton' onClick={() => navigate("/menuItemOne/contactInfo/message", {state:selectedUser.phoneNo})}>Send Message</button>
      </ul>
    </div>
  )
}

export default ContactInfo