import BestSellerCard from "./BestSellerCard";
import "../CSS/PopularDeals.css";
import whey from "../whey.png";

function PopularDeals() {
  return (
    <section className="popular">
      <h3>Popular</h3>
      <div className="filter">
        <button className="bestSeller">Best Seller</button>
        <button className="categories">Categories</button>
      </div>
{/* 
      <div className="CardsDisplay">
        <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />  
                <BestSellerCard />  
                
        </div> */}

        <div className="scrolling-wrapper">
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />  

        </div>
        
        
      
    </section>
  );
}

export default PopularDeals;
