import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="banner banner-1 banner-4 light-banner">
                <div className="banner-item">
                    <div className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/7.png)" }}>
                        <div className="container">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/1.png"} alt="img" />
                            <h1 className="title">Buy Industrial Tools, Goods and Hardware Online</h1>
                            <p className="subtitle">
                            Master Store is India's largest marketplace for Industrial Goods, Business Supplies, MRO Products, Tools, Equipment and many more.
                            </p>
                            <Link to="/store" className="btn-custom primary">View Menu</Link>
                        </div>
                        <div className="banner-bottom-img">
                            
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/2.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/3.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/12.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;