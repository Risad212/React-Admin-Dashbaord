import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import './App.css';
import Home from './Pages/home/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';
import NewUser from './Pages/newUserPage/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/newProduct/newProduct';


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
             <Route path="/newuser" element={<NewUser />} />
             <Route path="/product" element={<ProductList />} />
             <Route path="/product/:productId" element={<Product />} />
             <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
       </div>
    </BrowserRouter>
  );
};

export default App;