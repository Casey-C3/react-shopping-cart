
import Summary from './Summary'
const Cart= ({cartItems,removeProduct,changeQuantity,saveItem}) => {
    return (
        <section className='cart-flex'>
            
            <div className="cart-flex__container">
                <h1 style={{marginLeft:20,fontSize:35}}>Cart</h1>
                
                {cartItems.map((cart) => (
                    <div className="cart-flex__container__product" key={cart.id}>
                        <div className="products-summary-img">
                            <img src={cart.image} alt={cart.title}/>
                        </div>
                    <div className="cart-flex__container__product__details">
                        <p className="product__details__title ">{cart.title}</p>
                        <p className="product__details__category">{cart.category}</p>
                        <p className="product__details__price">${cart.price}</p>
                    </div>

                    <div className="cart-flex__container__product__changes">
                        <div className="product__changes__qty">
                        <label>Qty: {cart.quantity}</label>
                            <button onClick={(e) => changeQuantity(e.currentTarget.textContent,cart)}>-
                            </button>
                            <button onClick={(e) => changeQuantity(e.currentTarget.textContent,cart)}>+

                            </button>
                        </div>
                         
                        <button className="remove-save" onClick={() => removeProduct(cart)}>Remove</button>
                        <button className="remove-save" onClick={() => saveItem(cart)}>Save</button>
                    </div>


                    </div>

                ))}
            </div>
            <Summary cartItems={cartItems}/>
            
            
        
        </section>
        
    )
}

export default Cart;