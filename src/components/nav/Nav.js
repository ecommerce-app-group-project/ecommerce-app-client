import { Link } from "react-router-dom";
import { Cart } from '../../Context'
import { useContext } from 'react'
import "./Nav.css";

const Nav = () => {
  const { cartItems } = useContext(Cart)
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
            <Link to='/cart'>Cart{cartItems.length}</Link>
          </li>
        </ul>
      </nav>
    </menu>
  )
};

export default Nav;
