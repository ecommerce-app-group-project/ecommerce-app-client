import React, { useState, useEffect } from "react";
import Product from "../product/Product";
import Loading from "../Loading";
import { Wrapper, Grid } from "./styles";

const Collection = () => {
  const url = "https://fakestoreapi.com/products?limit=6";

  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);

  const removeProduct = (id) => {
    const newCollection = collection.filter((product) => product.id !== id);
    setCollection(newCollection);
  };

  const fetchcollection = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const collection = await response.json();
      setLoading(false);
      setCollection(collection);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcollection();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (collection.length === 0) {
    return (
      <main>
        <div>
          <h2>no collection left</h2>
          <button onClick={() => fetchcollection()}>refresh</button>
        </div>
      </main>
    );
  }

  return (
    <Wrapper>
      <h1>Our Collection</h1>
      <Grid>
        {collection.map((product) => (
          <Product
            product={product}
            removeProduct={removeProduct}
            key={product.id}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Collection;
