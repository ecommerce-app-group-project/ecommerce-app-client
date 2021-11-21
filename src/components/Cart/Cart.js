import { useContext } from "react";
import "./Cart.css";
import CartContext from "../../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { showCart, cartItems } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };

  return (
    
    <>
    <h1 className='cart'>Shopping Cart</h1>
      {showCart && (
        <div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
