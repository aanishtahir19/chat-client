import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Join() {
    const [name, setName] =  useState("")
    const [room, setRoom] = useState("")
    return (
        <div className="flex flex-col w-36 mx-auto">
           <input className="border-2 border-black my-1" type="text" value={name} onChange={event=> setName(event.target.value)}/>
           <input className="border-2 border-black my-1"type="text" value={room} onChange={event=> setRoom(event.target.value)}/>
           <Link to={`/chat/${room.trim().toLowerCase()}/${name.trim().toLowerCase()}`}>
           <button className="flex mx-auto"type="submit" >Submit</button>
           </Link>
         
        </div>
    )
}

export default Join
