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
          <div className="othersPage">
             <h2>Page</h2>
          </div>
       </div>
    </div>
  );
};

export default App;