import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./List.scss";
const List = ({catId,maxPrice,sort,subCats,catTitle}) => {
    const {data,loading,error} = useFetch(`/products?populate=*&[filters][categories][title]=${catTitle}${subCats.map(item=>`&[filters][sub_categories][documentId][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`);
     console.log(subCats);
     console.log("items",data);
    return ( 
        <div className="list">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
     );
}
 
export default List;