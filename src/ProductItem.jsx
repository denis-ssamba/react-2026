import Button from "./Button";

const ProductItem = (data)=>{

    const {name, color, weight, description , price , id }  = data.product
    //const {productData,setProductData} = data

    //console.log("product item data",data.productData)
    const handleRemove = (id)=>{
        const filtererdPdts = data.productData.filter((prdt)=>prdt.id !==id);
        data.setProductData(filtererdPdts);
        //console.log(filtererdPdts);
        //console.log("pdt",filtererdPdts)
            
    }

 
    
    return <div  key ={id}   style={{display:'flex',flexDirection:'row', gap:'1px', border:'1px solid #eee', padding:'3px', marginBottom:'7px'}}>
        
   <li style={{flex:1}} >{name}</li>
    <li style={{flex:1}}  >{color}</li>
    <li  style={{flex:1}}>{weight}</li>
    <li style={{flex:2}} >{description}</li>
    <li style={{flex:1}} >{price}</li>
    <li style={{flex:1}} > 
        <Button label="Remove" type="button" onClick={()=>handleRemove(id) } />&nbsp; &nbsp;
        <Button label="Edit" /> 
    </li>
    </div>


}

export default ProductItem;