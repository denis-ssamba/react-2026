const ProductItem = (data)=>{
   // console.log("Product",data);
    const {name, color, weight, description , price , id }  = data.product
    return <div  key ={id} >
        
   <li >{name}</li>
    <li >{color}</li>
    <li >{weight}</li>
    <li  >{description}</li>
    <li >{price}</li>

    </div>


}

export default ProductItem;