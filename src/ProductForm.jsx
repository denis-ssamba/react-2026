import Input from "./Input"
import Button from "./Button"
import { useState } from "react"
import axios from "axios"

const ProductForm = ({productData, setProductData , setIsFormOpen ,  clonePdtData , setClonePdtData})=>{

    const [productName, setProductName] =useState("");
    const [productColor, setProductColor] =useState("");
    const [productWeight, setProductWeight] =useState("");
    const [productDescription, setProductDescription] =useState("");
    const [productPrice, setProductPrice] =useState("100.00");    

    const productinitalstate = {title:'',brand:'',weight:'',description:'',price:'200.00'}
    const [product,setProduct] = useState(productinitalstate)

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

    const handeInputChange = (event)=>{
        const {id, value} = event.target;
        setProduct({...product,[id]:value})
        /*setProduct((preState)=>{
            return {...preState, [id]:value}
        })*/
        //console.log(event.target.value);


    }

    const handleSave = (event)=>{
        event.preventDefault();

        if(!product.title){
            alert("Please enter product name");
            return;
        }
        const productWithId = {...product,id:Date.now().toString() } 


        axios.post("https://dummyjson.com/products/add",productWithId)
        .then((result)=>{
            if(result.status === 200 || result.status === 201){
            setProductData([...productData,productWithId ])
            setClonePdtData([...clonePdtData,productWithId])
        
            setProduct(productinitalstate)
            setIsFormOpen(false);
               console.log(result.data); 
            }
        })
        .catch((error)=>{});
        //setProductData([...productData,productWithId ])
        //setClonePdtData([...clonePdtData,productWithId])
        
        //setProduct(productinitalstate)
        ///setIsFormOpen(false);

        

    }



    return <form onSubmit={handleSave} >

    <Input label="Product Name"  handleChange={handeInputChange} value={product.name} id='title' />
    <Input label="Product Color"  handleChange={handeInputChange} id='brand'  value={product.color}/>
    <Input label="Product Weight"  handleChange={handeInputChange} id='weight'  value={product.weight} />
    <Input label="Product Description"  handleChange={handeInputChange} id ='description'  value={product.description} />
    <Input label="Product Price"  handleChange={handeInputChange} id='price' value={product.price} />
    <Button label="Save" type="submit" />

    </form>

}


export default ProductForm