


const FilterCards = (list, text) => {
    //console.log(list)
    const filterFinal = list.filter(elem =>{
        
        return elem.title.toLowerCase().includes(text.toLowerCase());
     }
     )
     
     
    return filterFinal
}

export default FilterCards;