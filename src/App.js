import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import './App.css';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
       <Topbar />
       <div className="container">
          <Sidebar />
          <Home />
       </div>
    </div>
  );
};

export default App;