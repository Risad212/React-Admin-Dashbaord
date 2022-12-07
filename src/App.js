import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import './App.css';
import Home from './Pages/home/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UserList from './Pages/UserList/UserList';


const App = () => {
  return (
    <BrowserRouter>
       <Topbar />
        <div className="container">
          <Sidebar />
          {/*-- started routing ---*/}
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/user" element={<UserList />} />
          </Routes>
       </div>
    </BrowserRouter>
  );
};

export default App;