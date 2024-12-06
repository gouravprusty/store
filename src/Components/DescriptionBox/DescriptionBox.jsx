import './DescriptionBox.css';

export default function DescriptionBox() {
    return(
        <div className='description_box'>
            <div className="description_box__navigator">
                <div className="description_box__nav_box">Description</div>
                <div className="description_box__nav_box fade">Reviews (122)</div>
            </div>
            <div className="description_box__description">
                <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals shocase their products, interact with customers and conduct transactions witout the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility and the global reach they offer.</p>
                <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
        </div>
    )
};
