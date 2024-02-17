import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
    <a href="/">
        <img className="logo" src="https://franchisekhoj.com/wp-content/uploads/2022/05/Lazeez-affire-01-1024x1024.webp" alt="Lazeez Logo" />
    </a>
);

const Header = () => {
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="header">
            <Title />
            <h5>{user.name}-{user.email}</h5>
            <div className="nav-items">
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/about">Abou</Link>t</li>
                    <li><Link to= "/contact">Contact</Link></li>
                    <li><Link to= "/instaMart">InstaMart</Link></li>
                    <li><Link to= "/cart">Cart- {cartItems.length} items</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;