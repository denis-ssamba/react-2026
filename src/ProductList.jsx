import React from "react";
import ProductItem from "./ProductItem";
import ProductHeader from "./ProductHeader";

const ProductList = ({productData, setProductData , clonePdtData ,  setClonePdtData})=>{



return <>

<ul style={{listStyle:'none',display:'flex',flexDirection:'column'}}>
<ProductHeader/>

{
    clonePdtData.map((product) =>
     <ProductItem  
     key={product.id} 
     product = {product} 
     productData = {productData} 
     setProductData={setProductData}
     clonePdtData={clonePdtData}
     setClonePdtData={setClonePdtData}
     />)   
}
</ul>

</>

}


export default ProductList;