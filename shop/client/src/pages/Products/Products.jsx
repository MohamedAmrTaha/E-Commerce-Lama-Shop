import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
const Products = () => {
    const catId = parseInt(useParams().id)
    const[maxPrice,setMaxPrice]=useState(3000)
    const[sort,setSort]=useState(null)
    let title = "Men";
    if(catId === 2){
        title = "Women";
    }
    const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][title][$eq]=${title}`);
    const [selectedSubCat,setSelectedSubCat] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCat(
          isChecked
            ? [...selectedSubCat, value]
            : selectedSubCat.filter((item) => item !== value)
        );
        console.log(selectedSubCat);
      };
    return ( 
    <div className="products">
        <div className="left">
            <div className="filterItem">
                <h2>Product Categories</h2>
                {data.map(item=>(
                    <div className="inputItem" key={item.id} >
                    <input type="checkbox" id={item.id} value={item.documentId} onChange={handleChange}/>
                    <label htmlFor={item.id}>{item.title}</label>
                </div>
                ))}
            </div>
            <div className="filterItem">
                <h2>Filter by price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input type="range" min={0} max={3000} onChange={e=>setMaxPrice(e.target.value)}/>
                    <span>{maxPrice}</span>
                </div>
            </div>
            <div className="filterItem">
                <h2>Sort by</h2>
                <div className="inputItem">
                    <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
                    <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className="inputItem">
                    <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
                    <label htmlFor="desc">Price (Highst first)</label>
                </div>
            </div>


        </div>
        <div className="right">
            <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            />
            <List catId={catId} catTitle={title} maxPrice={maxPrice} sort={sort} subCats={selectedSubCat}/>

        </div>

    </div> );
}
 
export default Products;