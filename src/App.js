import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import './App.css';

const App = () => {
  return (
    <div>
       <Topbar />
       <div className="container">
          <Sidebar />
           
       </div>
    </div>
  );
};

export default App;