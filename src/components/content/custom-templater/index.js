import React from 'react';

const OurProductComponent = () => {
    return (
        <section className="our-products">
            <div className="container">
                <h2 className="heading">Our Products</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div class="row">
                    <div class="col-xl-4 col-md-4 col-sm-12">
                        <a href="/">
                            <div class="card product-card border-0 shadow">
                                <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img" alt="..." />
                                <div class="card-body text-center">
                                    <h6 class="card-title mb-0">This is Profile Template</h6>
                                    <h5>Price: $5.00</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default OurProductComponent;
