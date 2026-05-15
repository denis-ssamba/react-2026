
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

function App() {
  //const course = "Advanced Web and App development course";
  const credit ="2.5";
  const [productData,setProductData]= useState([]);

const [clonePdtData, setClonePdtData] = useState(productData);
  
const [isFormOpen, setIsFormOpen]= useState(false)
const [isLoading, setIsLoading] = useState(true);


const handleFormOpen = ()=>{
  setIsFormOpen(true);
}

useEffect(()=>{
    //console.log("loading");

    // then .catch ...

    const fetchData  = async ()=>{

      try{

      const results = await axios.get("https://dummyjson.com/products");
      setProductData(results.data.products);
      setClonePdtData(results.data.products);
      setIsLoading(false);
      }catch(error){

      }

    }

    fetchData();
},[])


const handleSearch = (et)=>{
 
 const filteredPdts =  productData.filter((pdt)=>pdt.title.toLowerCase().includes(et.target.value.toLowerCase()) 
 ||  pdt.brand && pdt.brand.toLowerCase().includes(et.target.value.toLowerCase()) 
 || pdt.description.toLowerCase().includes(et.target.value.toLowerCase())

);
 //setProductData(filteredPdts);
 setClonePdtData(filteredPdts);
}
  return (
    <div>
      
 {/*<h1> Hello world</h1>

 <StudentHello/>
 <StudentHello/>
 <StudentHello/>
 
  
 <Course course="Machine learing " credit="1.0" name="Mathew" marks="75"/>
 <Course course="Python training" credit="2.5" name= "Ayesha" marks="80"/>*/}
<Button label="New Product" onClick={handleFormOpen}/>
<SearchBox  handleChange={handleSearch}/>
{
  productData.length > 0 
  ? 

  /* conditionally rendering loading and product list */
  <ProductList  
  productData = {productData} 
  setProductData={setProductData} 
  clonePdtData={clonePdtData}
  setClonePdtData={setClonePdtData}
  />  



  : 
  <><img src={Loader}  alt=" loading image "/>
   <ErrorMsg msg="No data found, Please enter new products " />
  </>
  
}
 

 {/*<NameForm/>*/}

 {/*<State/>*/}
 {
  isFormOpen &&
  <ProductForm 
   productData={productData} 
   setProductData={setProductData}  
   setIsFormOpen = {setIsFormOpen}
   clonePdtData={clonePdtData}
   setClonePdtData={setClonePdtData}
   />
 }
 
     </div>
  )
}

export default App
