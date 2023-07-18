import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import SERVER_URL from '../../constants'
let socket;
function Chat({auth}) {
  const { room, name } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket = io(SERVER_URL, {query:{token:auth.Token}});
    socket.emit('join', { name, room }, (error) => {
      console.log(error);
    });

    return () => {
      socket.emit('disconnect_user');
      socket.off();
    };
  }, [SERVER_URL]);
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
      console.log('New Message: ', message);
    });
    socket.on('sendMessage', (message) => {
      setMessages([...messages, message]);
      console.log('New Message: ', message);
    });
  }, [messages]);
  const sendMessage = (event) => {
    socket.emit('sendMessage', message);
    setMessage('');
  };
  return (
    <div className='bg-purple-700 w-screen h-screen py-20'>
      <div className='lg:w-2/4 mx-auto border-2 border-black max-w-[500px]'>
        <ul className='p-3'>
          {messages.length > 0 &&
            messages.map((msg, index) => (
              
              <li className={`text-black  my-4  flex items-center  ${msg.user ===name? "flex-row-reverse jutify-end": null}`} key={index}>
                <span className={`bg-white p-2 rounded-lg  `}>{msg?.text}</span>
                <span className='text-sm mx-2 text-white relative top-1 '>
                  {msg?.user}
                </span>
              </li>
            ))}
        </ul>
        <input
          className='border-2 border-black my-1 w-full border-none mb-0 p-1'
          onKeyPress={(event) =>
            event.key === 'Enter' ? sendMessage(event) : null
          }
          type='text'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
    </div>
  );
}

export default Chat;
