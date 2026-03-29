import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); 
      });
  }, []);

  return { products, loading }; 
};