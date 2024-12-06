import { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../Assets/cart_cross_icon.png';

export default function CartItems() {
    const {getTotalCartAmount, all_product, cartItem, removeFromCart} = useContext(ShopContext);
    return(
        <div className="cart_items">
            <div className="cart_items__format_main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((el) => {
                if(cartItem[el.id] > 0){
                    return  <div key={el.id}>
                                <div className="cart_items__format cart_items__format_main">
                                    <img src={el.image} alt="icon" className='cart_item__product_icon' />
                                    <p>{el.name}</p>
                                    <p>${el.new_price}</p>
                                    <button className='cart_items__quantity'>{cartItem[el.id]}</button>
                                    <p>${el.new_price * cartItem[el.id]}</p>
                                    <img src={remove_icon} alt="remove" onClick={() => {removeFromCart(el.id)}} className='cart_items__remove_icon' />
                                </div>
                                <hr />
                            </div>
                }
                return null;
            })}
            <div className="cart_items__down">
                <div className="cart_items__total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cart_items_total__item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart_items_total__item">
                            <p>Shipping Charge</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart_items_total__item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cart_items__promocode">
                    <p>If you have a promo code, enter it here.</p>
                    <div className="cart_item__promobox">
                        <input type="text" placeholder='enter promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
