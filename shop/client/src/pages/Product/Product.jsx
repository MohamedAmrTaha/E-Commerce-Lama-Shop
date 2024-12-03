import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import './Product.scss'
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
const Product = () => {
    
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img")
    const [quantity, setQuanity] = useState(1)
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][u_id][$eq]=${id}`);
    console.log("data",data,id)
    const dispatch = useDispatch()


    return ( <div className="product">
        <div className="left">
            <div className="images">
                <img src={process.env.REACT_APP_UPLOAD_URL +
                  data[0]?.img?.url} onClick={e=>setSelectedImg("img")} />
                <img src={process.env.REACT_APP_UPLOAD_URL +
                  data[0]?.img2?.url} onClick={e=>setSelectedImg("img2")}/>
            </div>
            <div className="mainImg">
                <img src={process.env.REACT_APP_UPLOAD_URL +
                  data[0]?.[selectedImg]?.url} />
            </div>

        </div>
        <div className="right">
            <h1>{data[0]?.title}</h1>
            <span className='price'>EGP {data[0]?.price}</span>
            <p>{data[0]?.desc}</p>
            <div className="quantity">
                <button onClick={()=>setQuanity(prev=>prev === 1? 1:prev-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={()=>setQuanity(prev=>prev+1)}>+</button>
            </div>
            <button className="add" onClick={() =>
                dispatch(
                  addToCart({
                    id: data[0].documentId,
                    title: data[0].title,
                    desc: data[0].desc,
                    price: data[0].price,
                    img: data[0].img.url,
                    quantity,
                  }))}><AddShoppingCartIcon/>Add to cart</button>
            <div className="links">
                <div className='item'><FavoriteBorderIcon/>Add to wishlist</div>
                <div className='item'><BalanceIcon/>Add to compare</div>
            </div>
            <div className="info">
              <span>Vendor: AE</span>
              <span>Product Type: Jacket</span>
              <span>Tag: Jacket, Man, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>


        </div>
    </div> );
}
 
export default Product;