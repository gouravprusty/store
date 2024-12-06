import './Offers.css';
import exclusive_image from '../../Assets/exclusive_image.png';

export default function Offers() {
    return(
        <div className="offers">
            <div className="offers_left">
                <h1>Exclusive</h1>
                <h1>For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <button>Check now</button>
            </div>
            <div className="offers_right">
                <img src={exclusive_image} alt="Exclusive" />
            </div>
        </div>
    )
};
