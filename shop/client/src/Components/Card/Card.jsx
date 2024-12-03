import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({item}) => {
    return ( 
        <Link className="link" to = {`/product/${item.u_id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={process.env.REACT_APP_UPLOAD_URL+item.img.url} className="mainImg"/>
                    <img
                        src={
                            process.env.REACT_APP_UPLOAD_URL+item.img2.url
                        }
                        className="secondImg"
                    />

                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>EGP {item.oldPrice || item.price+380}</h3>
                    <h3>EGP {item.price}</h3>
                </div>
            </div>

        </Link>

     );
}
 
export default Card;