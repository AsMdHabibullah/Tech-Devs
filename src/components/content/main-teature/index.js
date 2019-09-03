import React from 'react';

const MainFeaturesComponent = () => {
    return (
        <section className="main-features">
            <div className="container">
                <h2 className="heading">Our main Features</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className="row">
                    <div className="col-xl-4 col-md-4 col-sm-12">
                        <div class="feature-item">
                            <div class="services-icon">
                                <i class="fab fa-accessible-icon" aria-hidden="true"></i>
                            </div>
                            <div class="service-text">
                                <h4>Ex cupidatat eu</h4>
                                <p>Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default MainFeaturesComponent;
