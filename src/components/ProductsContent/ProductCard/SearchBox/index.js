import "./styles.css"

const SearchBox = ({searchData}) =>{
    const ChangeData = e => {
        searchData(e.target.value);
    }

    return(
        <section className="search-box-container">
            <h2>Buscador de Productos</h2>
            <input
                className="search-box"
                type="text"
                placeholder="ingrese su busqueda" 
                onChange={ChangeData} />
        </section>
    )

}

export default SearchBox;