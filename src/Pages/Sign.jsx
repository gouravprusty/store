import './CSS/Sign.css';

export default function Sign() {
    return(
        <div className="sign">
            <div className="sign_container">
                <h1>Sign Up</h1>
                <div className="sign_fields">
                    <input type="text" placeholder="Your username" />
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="sign_login">Already have an account <span>Login here</span></p>
                <div className="sign_agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
};
