import React, { useEffect, useState } from 'react'
import { LoaderSmall } from '../components/Loader';
import { supaBase } from '../client';

const MenuItemTwo = () => {
  const[result, setResult] = useState([])

  const getData = async()=>{
    //fetching the data from the server
    const {data} = await supaBase.from("data").select()
    reverseOrder(data)
  }

  const reverseOrder = (result) => {
    let newArray = [...result]
    newArray.reverse()
    setResult(newArray)
  }
 
  //call getData inside useEffect
  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
if(result?.length===0){
  return(
    <LoaderSmall/>
  )
}
else{
  return (
  
    <div className='users'>
      {result?.map((item, index)=>{

        return(
          item.body  && <ul key={index} >
          <li style={{cursor:"default"}}>
            <label>Name : </label>{item?.firstName} {item?.lastName}<br/><br/>
            <label>Phone No : </label>{item?.phoneNo}<br/><br/>
            <label>Date : </label>{item?.date.split(" ")[0]} <br/><br/>
            <label>Time : </label>{item?.date.split(" ")[1]} <br/><br/>
            <label>OTP : </label>The OTP is {item?.otp}<br/><br/>
            <label>Message : </label>{item.body.split("-")[1]}</li>
        </ul>
        )
        })}
     
    </div>
  )
      }

}

export default MenuItemTwo