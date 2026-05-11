import React from "react";
import ProductItem from "./ProductItem";
import ProductHeader from "./ProductHeader";

const ProductList = ({productData})=>{



return <>

<ul style={{listStyle:'none',display:'flex',flexDirection:'column'}}>
<ProductHeader/>

{
    productData.map((product) => <ProductItem  key={product.id} product = {product} />)   
}
</ul>

</>

}


export default ProductList;