import { useOutletContext } from "react-router";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";

function Shop() {
  const { products, loading } = useFetchProducts();
  const { addToCart } = useOutletContext();

  return (
    <div className="shop-container">
      {loading ? (
        <div className="loading-container">
          <p>Please wait while we prepare our collection for you...</p>
        </div>
      ) : (
        <div className="grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;