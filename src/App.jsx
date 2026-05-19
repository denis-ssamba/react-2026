
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentHello from './StudentHello'
import Course from './Course'
import NameForm from './NameForm'
import ProductList from "./ProductList"
import State from './State'
import ProductForm from './ProductForm'
import {useState,useEffect} from "react"
import ErrorMsg from './ErrorMsg'
import Button from './Button'
import SearchBox from './SearchBox'
import axios from 'axios'
import Loader from './assets/load.gif'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './Product'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {
  //const course = "Advanced Web and App development course";

  return <div>
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Product />} />
    <Route path ="/product-details/:id" element={<ProductDetail/>} />
  </Routes>
</Router>
  </div>

  
}

export default App
