import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

   
const ProductDetail = () => {
    const { id } = useParams();
    const [productDetails,setProductDetails] = useState();

    useEffect(()=>{

        const fetchProductDetails = ()=>{
            axios.get(`https://dummyjson.com/products/${id}`).
            then((results)=>{
                setProductDetails(results.data);
            
            }).catch((err)=>{

            })
        }
fetchProductDetails();
    },[])
    return <div>
        <span><Link to="/products">Products</Link> </span>  <span style={{marginLeft: '5rem'}}>Product details :</span>
        {productDetails &&
         <div>
        <p>Tile : {productDetails.title} </p>
        <p>price : {productDetails.price} </p>
        <p> description : {productDetails.description} </p>
        <p> categor : {productDetails.category} </p>
        <p>Discount % : {productDetails.discountPercentage}</p>
        <p>Product ID: {id}</p>
        <img src={productDetails.thumbnail} alt={productDetails.title} />
         </div>
         }

    </div>
}

export default ProductDetail