import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const NavBar = ({cartNum,resetFilter}) => {

    return (
        <nav className="navbar">
              <Link className="navbar__brand-name" to="/">Super Real Store
                
              
              </Link> 
            <div>
                <ul className="nav-bar__list">
                    {/* <li className ="nav-bar__list-item"><a href="# ">Sign In</a></li> */}
                   
                    <li className ="nav-bar__list-item">
                        <Link to="/cart" onClick={() => resetFilter('All')}>
                            <FaShoppingCart className="nav-bar__list-item-cart"/> 
                            <span className="nav-bar__list-cart-count">
                                {cartNum.reduce( ( sum, {quantity})=> sum+quantity,0)}
                            </span> 
                             
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;