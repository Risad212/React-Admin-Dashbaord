import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import './App.css';
import Home from './Pages/home/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';


const App = () => {
  return (
    <BrowserRouter>
       <Topbar />
        <div className="container">
          <Sidebar />
          {/*-- started routing ---*/}
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/user" element={<UserList />} />
             <Route path="/user/:userId" element={<User />} />
          </Routes>
       </div>
    </BrowserRouter>
  );
};

export default App;