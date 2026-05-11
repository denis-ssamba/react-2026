const ProductItem = (data)=>{
 
    const {name, color, weight, description , price , id }  = data.product
    return <div  key ={id}   style={{display:'flex',flexDirection:'row', gap:'1px', border:'1px solid #eee', padding:'3px', marginBottom:'7px'}}>
        
   <li style={{flex:1}} >{name}</li>
    <li style={{flex:1}}  >{color}</li>
    <li  style={{flex:1}}>{weight}</li>
    <li style={{flex:2}} >{description}</li>
    <li style={{flex:1}} >{price}</li>

    </div>


}

export default ProductItem;