import { Link } from "react-router-dom";
import CartContext from '../../context/cart/CartContext'
import { useContext } from 'react'
import "./Nav.css";

const Nav = () => {
const { cartItems, showHideCart } = useContext(CartContext)
  return (
    <menu>
      <nav>
        <Link to='/' className='link'>
          <h2 className='logo'>Logo</h2>
        </Link>
        <ul>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          <li>
            <Link to='/product'>Shop</Link>
          </li>
          <li>
            <Link to='/auth'>Account</Link>
          </li>
          <li>
            <Link to='/cart'>
               <div className='nav__right'>
              <div className='cart__icon'>
                <i
                  className='fa fa-shopping-cart'
                  aria-hidden='true'
                  onClick={showHideCart}
                />
                {cartItems.length > 0 && (
                  <div className='item__count'>
                    <span>{cartItems.length}</span>
                  </div>
                )}
              </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </menu>
  )
};

export default Nav;
