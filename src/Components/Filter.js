const Filter = ({changeFilterState,filterItems}) => {
    return(
        <div className="filter">
            <h2>{filterItems} items</h2>
       
            <select onChange={ (e) => changeFilterState(e.target.value)}>
                <option value="all">All</option>
                <option value="men">Men's Clothing</option>
                <option value="women">Women's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
            </select>
        </div>
    )
}
export default Filter