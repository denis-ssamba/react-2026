import Input from "./Input"
import Button from "./Button"
import { useState } from "react"

const ProductForm = ()=>{

    const [productName, setProductName] =useState("");
    const [productColor, setProductColor] =useState("");
    const [productWeight, setProductWeight] =useState("");
    const [productDescription, setProductDescription] =useState("");
    const [productPrice, setProductPrice] =useState("100.00");    

    const [product,setProduct] = useState({name:'',color:'',weight:'',description:'',price:'200.00'})

    /*const handleProductName = (event)=>{

        setProductName(event.target.value);
    }

    const handleProductColor = (event)=>{
        setProductColor(event.target.value);
    }

    const handleProductWeight = (event)=>{
        setProductWeight(event.target.value);
    }

    
    const handleProductDescription = (event)=>{
        setProductDescription(event.target.value);
    }

    
    const handleProductPrice = (event)=>{
        setProductPrice(event.target.value);
    }*/

    const handeChange = (event)=>{
        //const {id, value} = event.target;
        console.log(event.target.id);


    }

    return <form>

    <Input label="Product Name"  handleChange={handeChange} value={product.name} id='name' />
    <Input label="Product Color"  handleChange={handeChange} id='colorx'  value={product.color}/>
    <Input label="Product Weight"  handleChange={handeChange} id='weight'  value={product.weight} />
    <Input label="Product Description"  handleChange={handeChange} id ='description'  value={product.description} />
    <Input label="Product Price"  handleChange={handeChange} id='price' value={product.price} />
    <Button label="Save" type="submit"/>
    </form>

}


export default ProductForm