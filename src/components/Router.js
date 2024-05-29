import { Route, Routes } from "react-router-dom"
import ProductCard from "./ProductsContent/ProductCard"
import ProductContent from "./ProductsContent";



const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<ProductContent />} />
            <Route path="/product" element={<ProductCard />} />
            
        </Routes>
    )
}

export default Router;
