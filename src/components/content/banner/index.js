import React from 'react';

const BannerComponent = () => {
    return (
        <section className="banner">
            <img className="banner-img" src={`${process.env.PUBLIC_URL}/assets/images/banner.png`} alt="banner-img" />
            <div className="container text-center">
                <div className="banner-text">
                    <h2>Welcome to "Tech-Team"</h2>
                    <hr />
                    <h5>We are JavaScript and Python Developer.</h5>
                    <p>Do you have any question?</p>
                    <a href="/" className="btn btn-info">Live chat</a>
                </div>

            </div>
        </section>
    );
};


export default BannerComponent;
