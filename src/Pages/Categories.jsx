import { useContext } from 'react';
import './CSS/Categories.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

export default function Categories(props) {
    const {all_product} = useContext(ShopContext)
    return(
        <div className="category">
            <img src={props.banner} alt="banner" className='category_banner' />
            <div className="category_index">
                <p><span>Showing 1 - 12</span> out of 36 products</p>
                <div className="category_sort">Sort by <img src={dropdown_icon} alt="dropdown" /></div>
            </div>
            <div className="category_products">
                {all_product.map((item, i) => {
                    if(props.category === item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }else{
                        return null;
                    }
                })}
            </div>
            <div className="category_load_more">Explore More</div>
        </div>
    )
};
