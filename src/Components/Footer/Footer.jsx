import './Footer.css';
import footer_logo from '../../Assets/logo_big.png';
import instagram_icon from '../../Assets/instagram_icon.png';
import pinterest_icon from '../../Assets/pinterest_icon.png';
import whatsapp_icon from '../../Assets/whatsapp_icon.png';

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer_logo">
                <img src={footer_logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer_links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer_social_icons">
                <div className="footer_icons_container">
                    <img src={instagram_icon} alt="instagram" />
                </div>
                <div className="footer_icons_container">
                    <img src={pinterest_icon} alt="pinterest" />
                </div>
                <div className="footer_icons_container">
                    <img src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div>
            <div className="footer_copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
};
