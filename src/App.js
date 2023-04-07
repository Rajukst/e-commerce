import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavBar from './Pages/Navbar/MyNavBar';
import Home from './Pages/Home/Home';

import AdminDashboard from './Admin/Dashboard/AdminDashboard';
import AddProducts from './Admin/AddProducts/AddProducts';
import ProductView from './Pages/Products/ProductView/ProductView';
import CartItem from './Pages/Cart/CartItem';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartItem/>}/>

        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/addproduct' element={<AddProducts/>}/>
        <Route path='/product/:id' element={<ProductView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
