
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

function App() {
  //const course = "Advanced Web and App development course";
  const credit ="2.5";
  const productData = [
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
    
]


  return (
    <div>
      
 {/*<h1> Hello world</h1>

 <StudentHello/>
 <StudentHello/>
 <StudentHello/>
 
  
 <Course course="Machine learing " credit="1.0" name="Mathew" marks="75"/>
 <Course course="Python training" credit="2.5" name= "Ayesha" marks="80"/>*/}

 <ProductList  productData = {productData}/>

 {/*<NameForm/>*/}

 {/*<State/>*/}
 <ProductForm/>
     </div>
  )
}

export default App
