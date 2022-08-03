import React from 'react'
import {useNavigate} from 'react-router-dom';

const MenuItemOne = () => {
  const users = require("../data/users.json")
  const navigate = useNavigate()
  return (
    <div className='users'>
      <ul>
        {users.map((item, index)=>{
          return(
            // passign the phone number to the next page
          <li key = {index} onClick={()=>navigate("/menuItemOne/contactInfo" , {state:item.phoneNo})}>{item.firstName} {item.lastName}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuItemOne