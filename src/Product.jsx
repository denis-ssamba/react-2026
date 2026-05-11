import React from "react";
import ProductItem from "./ProductItem";

const Product = ()=>{

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

    //const names = ["Bryan", "Ayesha", "Mathew", "John", "Jane","John" ];



return <>

<ul>
{
    productData.map((product) => <ProductItem  key={product.id} product = {product} />)

    
}
</ul>

</>

}


export default Product;