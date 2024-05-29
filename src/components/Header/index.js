import { Link } from "react-router-dom";
import "./styles.css"
const Header = () => {

    return(
        <article className="header">
            <h1 className="header-h1">Tienda en linea Lorem Ipsum</h1>
            <nav>
            <Link className="link-react" to="/">Volver a la página principal</Link>
            <Link className="link-react" to="/product" >Conozca nuestros productos</Link>
            
            </nav>
        </article>
    )
    
}

export default Header;