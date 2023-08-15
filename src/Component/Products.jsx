import { useEffect, useState } from "react"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { add } from "../Store/cartSlice";
import { fetchProducts } from "../Store/productSlice";

export default function Products()
{
    //let [product, setproducts]= useState([]);
    let {data, status} = useSelector((state)=> state.products);

    let dispatch = useDispatch();

    let handleAdd = (prod) => {
        dispatch(add(prod))
    }
    
    useEffect(() => {
        const getproducts = async() =>{
            dispatch(fetchProducts());
        }
        getproducts();
    },[])

    
    return(
        <div className="productsWrapper">
            {data.map((prod) => 
                {return <div key={prod.id} className="card">
                        <img src={prod.image}/>
                        <h6>{prod.title}</h6>
                        <h5>{prod.price}$</h5>
                        <button onClick={()=>handleAdd(prod)} className="btn">Add to Cart</button>
                    
                     </div>
                })}
        </div>
    )
}