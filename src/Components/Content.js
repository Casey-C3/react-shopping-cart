const Content = ({products,addProduct,filterProducts}) => {
    
    return (
        
        <section className='section-flex'>
          
            <div className='section-flex__product' >
                {filterProducts.map((product)=> (
                    
                    <div className='section-flex__product__items' key={product.id} >
                    
                    <div className='product__image'>
                        <img src={product.image} alt={product.title} />
                    </div>
                    
                    <div className='product__price'>
                        <h2>${product.price}</h2>
                    </div>
                   
                    <div className='product__name'>
                        <h2>{product.title} </h2>
                    </div>
                   
                    <div className='product__button'>
                        <button onClick={(e) => addProduct(product)}>Add to Cart</button>
                    </div>
                    
                </div>
                ))}


            </div>
            
        
        </section>
    )
}
export default Content;