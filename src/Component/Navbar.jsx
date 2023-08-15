import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Navbar()
{
    let items = useSelector((state) => state.cart)
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span className="logo">Redux Store</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link to="/cart" className="navLink" >Cart</Link>
                <span className="cartCount">Cart Items : {items.length} </span>
            </div>
        </div>
    )
}