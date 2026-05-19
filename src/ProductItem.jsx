import { Link } from "react-router-dom";
import Button from "./Button";

const ProductItem = (data)=>{

    const {title, brand, weight, description , price , id }  = data.product
    //const {productData,setProductData} = data

    //console.log("product item data",data.productData)
    const handleRemove = (id)=>{
        const filtererdPdts = data.clonePdtData.filter((prdt)=>prdt.id !==id);
        data.setClonePdtData(filtererdPdts);
        //update orginal state. 
        data.setProductData(filtererdPdts)
        //console.log(filtererdPdts);
        //console.log("pdt",filtererdPdts)
            
    }

 
    const handleView = ()=>{
            //navigateTo(/product-details)) // recommended 
    }
    
    return <div  key ={id}   style={{display:'flex',flexDirection:'row', gap:'1px', border:'1px solid #eee', padding:'3px', marginBottom:'7px'}}>
        
   <li style={{flex:1}} >{title}</li>
    <li style={{flex:1}}  >{brand}</li>
    <li  style={{flex:1}}>{weight}</li>
    <li style={{flex:3}} >{description}</li>
    <li style={{flex:1}} >{price}</li>
    <li style={{flex:2}} > 
        <Button label="Remove" type="button" onClick={()=>handleRemove(id) } />&nbsp; &nbsp;
        <Button label="Edit" /> 
        &nbsp; &nbsp;
        <Link to ={`/product-details/${id}`}><Button label="View" /> </Link>
    </li>
    </div>


}

export default ProductItem;