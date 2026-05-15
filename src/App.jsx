
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
import {useState} from "react"
import ErrorMsg from './ErrorMsg'
import Button from './Button'
import SearchBox from './SearchBox'

function App() {
  //const course = "Advanced Web and App development course";
  const credit ="2.5";
  const [productData,setProductData]= useState([
    {
        name:"Lenovo ThinkPad" ,
        color: "Black",
        weight: "15kg",
        description:"500GB, 16GB RAM",
        price: "2500",
        id: "1"
    },
    {
        name:"HP Pavilion" ,
        color: "Silver",
        weight: "10kg", 
        description:"1TB, 32GB RAM",
        price: "3500",
        id: "2"
      }
    
]);

const [clonePdtData, setClonePdtData] = useState(productData);
  
const [isFormOpen, setIsFormOpen]= useState(false)


const handleFormOpen = ()=>{
  setIsFormOpen(true);
}

const handleSearch = (et)=>{
 
 const filteredPdts =  productData.filter((pdt)=>pdt.name.toLowerCase().includes(et.target.value.toLowerCase()));
 setProductData(filteredPdts);
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
  productData.length > 0 ? <ProductList  productData = {productData} setProductData={setProductData} />  : <ErrorMsg msg="No data found, Please enter new products " />
}
 

 {/*<NameForm/>*/}

 {/*<State/>*/}
 {
  isFormOpen && <ProductForm productData={productData} setProductData={setProductData}  setIsFormOpen = {setIsFormOpen}/>
 }
 
     </div>
  )
}

export default App
