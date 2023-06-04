import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Join() {
    const [name, setName] =  useState("")
    const [room, setRoom] = useState("")
    return (
        <div className="w-screen h-screen bg-slate-700 grid place-items-center">
        <div className="flex flex-col w-36 mx-auto  bg-white p-4 rounded min-w-[250px]">
            <h3 className='text-center font-bold mb-3'>Chat Room</h3>
           <input className="border-bottom border-b-2 px-2  border-black mb-3" type="text" placeholder='Enter Your Name' value={name} onChange={event=> setName(event.target.value)}/>
           <input className="border-b-2 border-black px-2 mb-3"type="text" value={room} placeholder='Enter Room Name' onChange={event=> setRoom(event.target.value)}/>
           <Link to={`/chat/${room.trim().toLowerCase()}/${name.trim().toLowerCase()}`}>
           <button className="flex mx-auto bg-red-300 py-1.5 px-4 rounded"type="submit" >Submit</button>
           </Link>
         
        </div>
        </div>
    )
}

export default Join
