import React, { useState,useEffect } from 'react'
import NavBar from './NavBar'
import Content from './Content'
import { HashRouter,Route, Switch} from 'react-router-dom'
import Cart from './Cart'
import SaveLater from './SaveLater'
import Filter from "./Filter";


const App = (props) => {
  
  const[products,setProducts] = useState([])

  const[filterProducts,setFilterProducts] = useState([])
  const[filterStatus,setFilterStatus] =useState('All')

  
  const[cart,setCart] = useState([])

  const[saveItems,setSaveItems] = useState([])
  
  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
     
     
    }
    fetchData()
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const saveItems = JSON.parse(localStorage.getItem('save'));
    if (cartItems) {
      setCart(cartItems);
    }
    if (saveItems) {
      setSaveItems(saveItems);
    }

  },[])
  useEffect(() => {
    const handleFiltering = () => {
      if(filterStatus === 'men') {
        setFilterProducts(products.filter(todo => todo.category === "men's clothing"))
      } else if(filterStatus === 'women') {
        setFilterProducts(products.filter(todo => todo.category === "women's clothing"))
      } else if(filterStatus === 'electronics') {
        setFilterProducts(products.filter(todo => todo.category === "electronics"))
      } else if(filterStatus === 'jewelery') {
        setFilterProducts(products.filter(todo => todo.category === "jewelery"))
      } else {
        setFilterProducts(products)
      }
    }
    handleFiltering()

  },[filterStatus,products])
  
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
   
  },[cart])

  useEffect(() => {
 
   
    localStorage.setItem('save', JSON.stringify(saveItems));
    
  },[saveItems])

  
  const addToCart = (product) => {
    const checkExist = cart.find((element) => element.id === product.id)
    
    if(checkExist) {
      setCart(
        cart.map((item) =>
        item.id === product.id ? {...checkExist,quantity:checkExist.quantity+1} : item
        )
      )

    }else {
      setCart([...cart,{...product,quantity:1}])

    }
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((item) =>item.id !== product.id))
  }

  
  const changeQuantityClick =(value,product) => {
    if(value === '-') {
      if(product.quantity === 1) {
        removeFromCart(product)
        
      } else {
        setCart(
          cart.map((item) =>
          item.id === product.id ? {...product,quantity:product.quantity-1} : item
          )
        )
      }
      
    } else {
      setCart(
        cart.map((item) =>
        item.id === product.id ? {...product,quantity:product.quantity+1} : item
        )
      )
      
    }
  }

  const addToSaved = (product) => {
    removeFromCart(product)
    const checkExist = saveItems.find((element) => element.id === product.id)
    if(!checkExist) {
      setSaveItems([...saveItems,{...product,quantity:1}])
    }

  }

  const removeFromSave = (product) => {
    setSaveItems(saveItems.filter((item) =>item.id !== product.id))

  }

  const addSaveToCart= (product) => {
    addToCart(product)
    removeFromSave(product)
  }

  const changeFilterState = (value) => {
    setFilterStatus(value)
  }
 

  return(
    <HashRouter basename="/">
      <div className='container'>
        <NavBar cartNum={cart} resetFilter={setFilterStatus}/>
        <Switch>
          <Route exact path="/">
            {filterProducts ? <Filter changeFilterState={changeFilterState} filterItems={filterProducts.length}/> : ''}
            {filterProducts ? <Content products={products} addProduct ={addToCart} filterProducts={filterProducts}/>: 'loading..'}
            
          </Route>
          
          <Route exact path="/cart">
           
            <Cart cartItems ={cart} removeProduct ={removeFromCart} changeQuantity={changeQuantityClick} saveItem={addToSaved}/>
            <SaveLater savedItems={saveItems} addProduct={addSaveToCart} removeSavedItems={removeFromSave}/>
            
            
            
          </Route>
          
         
        </Switch>
       
      </div>
    </HashRouter>


  )

}

export default App;
