import React from 'react';

const OurClientsComponents = () => {
    return (
        <section className="our-clients">
            <div className="container">
                <div className="row">
                    <div className="col-xl-1 col-md-1 col-sm-3">
                        <div className="clients-img">
                            <img src={`${process.env.PUBLIC_URL}/asset/images/4.png`} alt="our-client" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default OurClientsComponents;
