import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo_container">Logo Image</div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props)=>{
    const {name, cuisine, rating} = props
    return(
        <div className="res-card">
            <h3>{name}</h3>
            <h5>{cuisine}</h5>
            <h5> rating: {rating}</h5>

        </div>
    )
}
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                <RestaurantCard name="Meghana Foods" cuisine="Biryani, North India" rating="4.5" />
                <RestaurantCard name="KFC Foods" cuisine="Chicken, North India" rating="4.2" />
                <RestaurantCard name="Work Foods" cuisine="Burger, South India" rating="4.3" />
                <RestaurantCard name="New City Foods" cuisine="Dosa, South India" rating="4.4" />
                <RestaurantCard name="Old city Foods" cuisine="Mutton, central India" rating="3.9" />
            </div>
        </div>
    )
}

const AppLayout  = ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)