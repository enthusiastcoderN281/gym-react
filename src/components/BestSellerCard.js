import '../CSS/BestSellerCard.css';
import whey from '../whey.png';

function BestSellerCard(props)
{
    return(
        <div className='card'>
            <img src={whey}></img>
            <div className='inner'>
                <p>Whey Proteins</p>
                <h4>Biozyne Performance Whey</h4>
                <p>₹4000 <span>₹4799</span></p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default BestSellerCard;