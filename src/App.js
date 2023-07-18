import './App.scss';
import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Join from './Components/Join/Join';
import Chat from './Components/Chat/Chat';
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
function App() {
    const [auth, setAuth] = React.useState({loggedIn:false, user:null})
    return ( 
       <>
       <Routes>
           <Route path="/chat/:room/:name" element={<Chat auth={auth}/>}/>
           <Route path="/join" element={<Join/>}/>
           <Route path="/register"exact element={<Register auth={auth} setAuth={setAuth}/>}/>
           <Route path="/login"exact element={<Login auth={auth} setAuth={setAuth}/>}/>
       </Routes>
       
       </>
     );
}

export default App;