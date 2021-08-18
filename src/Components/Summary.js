const Summary = ({cartItems}) => {

    const subtotal = Math.round(cartItems.reduce((start,item) => start + (item.price * item.quantity),0)* 100) / 100
    const salesTax = Math.round(( subtotal * .06500) * 100) / 100
   
    const grandTotal = Math.round((subtotal+salesTax) * 100)/100
    return(
        <div className="cart-flex__summary">
            <h1 style={{marginBottom:5,textAlign:"center",fontSize:35}}>Order Summary</h1>
            <div className="cart-flex__summary__details">
                <div className="summary__subtotal">
                    <p>Order Subtotal</p>
                    <p>${subtotal}</p>
                </div>
                <div className="summary__tax" > 
                    <p>Sales Tax</p>
                    <p>${salesTax}</p>
                </div>
                <div className="summary__grandtotal">
                    <p>Grand Total</p>
                    <p>${grandTotal}</p>
                </div>
                <div className="summary_checkout">
                    <button>Checkout</button>
                </div>
                
            </div>
        </div>


    )
}
export default Summary;