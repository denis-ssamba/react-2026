import React from "react"

const ProductHeader = ()=>{

return <div  style={{display:'flex',flexDirection:'row',gap: '1px',border:'3px solid #ccc',padding: '8px 12px'}}>
    <li style={{flex:1, fontWeight:600, color:'red'}}>Name</li>
    <li style={{flex:1 ,fontWeight:600 , color:'red'}}  >Brand</li>
    <li style={{flex:1, fontWeight:600, color:'red'}} >Weight</li>
    <li style={{flex:3, fontWeight:600, color:'red'}} >Description</li>
    <li style={{flex:1, fontWeight:600,color:'red'}}>Price</li>
    <li style={{flex:2, fontWeight:600,color:'red'}}>Actions</li>

    </div>
}

export default ProductHeader