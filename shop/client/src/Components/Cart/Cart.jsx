import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import {useSelector, useDispatch} from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch()
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };
    return ( 
    <div className="cart">
        <h1>Products in your cart</h1>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt={item.title}/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className="price">{item.quantity} x EGP{item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>EGP {totalPrice()}</span>
        </div>
        <Link to="/Checkout" style={{textDecoration:'none'}}>
        <button className="checkout">PROCEED TO CHECKOUT</button></Link>
        <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>


       
    </div> );
}
 
export default Cart;