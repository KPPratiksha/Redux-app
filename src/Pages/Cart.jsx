import { useDispatch, useSelector } from "react-redux"
import { remove } from "../Store/cartSlice";

export default function Cart(){
    let items = useSelector((state)=>state.cart)

    let dispatch = useDispatch();

    let handleRemove = (itemid) => {
        dispatch(remove(itemid));
    }

    return(
        <div className="cartWrapper">
            {items.map((item) => (
                <div key={item.id} className="cartCard">
                    <img src= {item.image}></img>
                    <h5>{item.title}</h5>
                    <h5>Price : ${item.price}</h5>

                    <button className="remove-btn" onClick={() => handleRemove(item.id)}> Remove Item</button>
                </div>
            ))}
        </div>
    )
}