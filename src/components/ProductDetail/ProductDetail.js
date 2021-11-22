import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../../pages/product/Loading";
import { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import {
  Img,
  Card,
  CardContent,
  ProductPrice,
  ProductInfo,
  ProductTitle,
  Action,
  Button,
} from "./styles";

function ProductDetail() {
  const { addToCart } = useContext(CartContext)

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const url = `https://fakestoreapi.com/products/${id}`

  const fetchSingleProduct2 = async () => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        const result = res.data
        setLoading(false)
        setProduct(result)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchSingleProduct2()
  }, [])

  if (loading) {
    return <Loading />
  }
  console.log(product)

  return (
    <Card>
      <Img src={product.image} alt='image of product' />
      <CardContent>
        <ProductTitle>{product.title}</ProductTitle>

        <ProductInfo>
          <h2>About this item: </h2>
          <p>{product.description}</p>
        </ProductInfo>
        <ProductPrice>
          Price: <span>${product.price}</span>{' '}
        </ProductPrice>

        <Action>
          <Button onClick={() => addToCart(product)}>Add to basket</Button>
        </Action>
      </CardContent>
    </Card>
  )
}

export default ProductDetail;
