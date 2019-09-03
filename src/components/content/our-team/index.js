import React from 'react';

const OurTeamMemberComponent = () => {
    return (
        <section className="our-team">
            <div className="container">
                <h2 className="heading">Our Experts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit perferendis aliquam.</p>

                <div className="row">
                    <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="card border-0 shadow">
                            <img className="card-img" src="https://source.unsplash.com/9UVmlIb0wJU/500x350" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Lisa</h5>
                                <h6 className="card-text text-black-50">Front-End Developer
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default OurTeamMemberComponent;
