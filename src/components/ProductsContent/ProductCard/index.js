import { useState } from "react";
import AxiosHook from "../../../hooks/AxiosHook";
import SearchBox from "./SearchBox";
import FilterCards from "../../../hooks/FilterCards";
import Card from "./Card";
import "./styles.css";




const ProductCard = () =>{
    const {getAxios} = AxiosHook("https://fakestoreapi.com/products");
    const [searchText, setSearchText] = useState("");
    const Filtered = FilterCards(getAxios, searchText);
    

    return(
       
        <article>
            <SearchBox searchData={setSearchText} />
            <section className="cards-container">
                {
                    
                    Filtered.length > 0 
                    ?
                    Filtered.map((product) => {
                        const {price, id, image, description, title  } = product;
                        return (
                        <Card 
                        key={id} 
                        name={title} 
                        price={price} 
                        description={description} 
                        img={image}  />
                        ) 
                    }
                    )
                    : 
                    
                    <article className="cards-empty">
                        
                        <h1>Lo sentimos Su Articulo No Se Encuentra Disponible</h1>
                        <h2>Favor de reiniciar la busqueda</h2>
                    </article>
           
                } 
            </section>
        </article>
        
           

        
        
        
    )
}

export default ProductCard;