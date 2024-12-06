import './ProductDisplay.css';
import star_icon from '../../Assets/star_icon.png';
import star_dull_icon from '../../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className='product_display'>
            <div className="product_display__left">
                <div className="product_display__image_list">
                    <img src={product.image} alt="Product" />
                    <img src={product.image} alt="Product" />
                    <img src={product.image} alt="Product" />
                    <img src={product.image} alt="Product" />
                </div>
                <div className="product_display__image">
                    <img src={product.image} alt="product" className='product_display__main_image' />
                </div>
            </div>
            <div className="product_display__right">
                <h1>{product.name}</h1>
                <div className="product_display_right__stars">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>(122)</p>
                </div>
                <div className="product_display_right__prices">
                    <div className="product_display__oldprice">${product.old_price}</div>
                    <div className="product_display__newprice">${product.new_price}</div>
                </div>
                <div className="product_display_right__description">A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt and outershirt garment.</div>
                <div className="product_display_right__size">
                    <h1>Select size</h1>
                    <div className="product_display_right__sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className="product_display_right__category"><span>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className="product_display_right__category"><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    )
};
