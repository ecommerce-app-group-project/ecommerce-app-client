import { useContext, useEffect, useState } from 'react'
import { Cart } from '../../Context'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

const CartPage = () => {
  const [total, setTotal] = useState()
  const {cartItems} = useContext(Cart)

  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cartItems])

  return (
    <div style={{ textAlign: 'left' }}>
      <span style={{ fontSize: 30 }}>Cart Total: ${total}</span>
      <div className='productContainer'>
        {cartItems.map((product) => (
          <ProductDetail product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
  
}

export default CartPage