import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import { supaBase } from '../client';

const Message = () => {
    
  const location = useLocation();
  const[otp, setOtp] = useState()
  const [value, setValue] = useState("")
  const [result, setResult] = useState([])
  const[message , setMessage] = useState()
  const[flag, setFlag] = useState(false)
  const users = require("../data/users.json")
  const selectedUser = users.find((item)=>item.phoneNo === location.state)
  const handleChange = (e) =>{
    setValue(e.target.value)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await axios.post(
      `https://api.twilio.com/2010-04-01/Accounts/${process.env.USERNAME}/Messages.json`,
      `Body=Hi, Your OTP is: ${otp}. ${value}&From=+18437382646&To=+91${selectedUser?.phoneNo}`,
      {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          auth: {
              username: process.env.USERNAME ,
              password: process.env.PASSWORD
          }
      }
  ).then((res)=>res).catch((err)=>err);
  
  if(response.status === 200 || response.status === 201){
    const data = {
      "body" :response?.data.body,
      ...selectedUser,
      otp 
    }
    setResult(data)
    setMessage("Message sent successfully;")
    setFlag(true)
  }
  else{
    setMessage(response?.response.data.message)
    setFlag(false)
  }
  setValue("")
  }

  useEffect(() => {
    const OTP = Math.floor((Math.random()*1000000)+1);
    setOtp(OTP)

  }, [location.state])

  

  useEffect(() => {
    const sendData = async()=>{
      //update result with seleced user data and result 
    const date  = new Date()
      //get date and time
    const dateTime = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      
    const value ={...result, "date":dateTime}
    // await axios.post('/response', value).catch(error => {console.error(error)});
    await supaBase.from('data').insert([value]).single()
    }
    Object.keys(result).length > 0  && sendData()
    
  }, [result, selectedUser, otp])


  return (
    <div className='users'>
      <ul>
        <li style={{cursor: "default"}}>{selectedUser?.firstName} {selectedUser?.lastName}</li>
        <li style={{cursor: "default"}}>{`Hi Your OTP is : ${otp}`}</li>
      </ul>
      <form onSubmit={handleSubmit} className="form">
          <input autoFocus type="text" value={value} onChange={handleChange} required placeholder="Enter your text"/>
          <button className='sendButton' type='submit'>Send</button>
      </form>
      <div style={{maxWidth:"80%", margin:"0 auto", color: flag? "green":"red"}}> <p style={{fontSize:"20px", fontFamily:"monospace"}}>{message?.split(";")[0]}.</p></div>
    </div>
  )
}

export default Message