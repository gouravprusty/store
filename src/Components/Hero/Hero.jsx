import './Hero.css'
import arrow_icon from '../../Assets/arrow.png'
import hand_icon from '../../Assets/hand_icon.png'
import hero_image from '../../Assets/hero_image.png'

export default function Hero() {
    return(
        <div className="hero">
            <div className="hero_left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hero_hand_icon">
                        <p>New</p>
                        <img src={hand_icon} alt="hand icon" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero__latest_btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>
            <div className="hero_right">
                <img src={hero_image} alt="hero image" />
            </div>
        </div>
    )
};
