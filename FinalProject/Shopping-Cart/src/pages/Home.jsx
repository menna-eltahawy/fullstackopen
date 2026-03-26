import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Elevate Your Everyday Style</h1>
        <p>
          Discover a curated collection of premium products designed for those 
          who value quality and elegance. From daily essentials to unique finds, 
          <strong> Menna Store</strong> brings the best of the world right to your doorstep.
        </p>
        
        <div className="features">
          <span>✓ Fast Worldwide Shipping</span>
          <span>✓ Secure Checkout</span>
          <span>✓ 100% Quality Guarantee</span>
        </div>

        <Link to="/shop" className="cta-button">
          Explore Collection
        </Link>
      </div>
    </div>
  );
}

export default Home;