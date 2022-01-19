import './App.scss';
import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Join from './Components/Join/Join';
import Chat from './Components/Chat/Chat';
function App() {
    console.log(process.env.REACT_APP_NAME)
    return ( 
       <>
       I am in App.js
       <Routes>
           <Route path="/chat/:room/:name" element={<Chat/>}/>
           <Route path="/"exact element={<Join/>}/>
       </Routes>
       
       </>
     );
}

export default App;