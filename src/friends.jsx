import './friends.css'
import { useEffect, useState } from "react"
import Friend from './friend'

export default function Friends(){
     const [friends,countfriends]= useState([])
     useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=> res.json())
       .then(data=>countfriends(data))
     },[])
    return (
        <div className='box'>
         <h2>friends:{friends.length}</h2>
         {
            friends.map(friend=><Friend friend={friend}></Friend>)
         }
        </div>
    )
}