import React from 'react';

const MisionVisionComponent = () => {
    return (
        <section className="mision-vision">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="mv-info">
                            <h2 className="heading">Our Mission & Vission</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit perferendis aliquam, ducimus explicabo voluptas odit ad amet ratione delectus laborum aperiam veniam, optio facilis sapiente maiores deleniti porro, inventore doloremque Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            <a className="btn btn-info" href="/">Contact Us</a>
                        </div>
                        <ul class="mv-item">
                            <li>
                                <span class="fa fa-check" aria-hidden="true">Donec facilisis velit eu est phasellus consequat quis nostrud</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="mv-img">
                            <img src={`${process.env.PUBLIC_URL}/asset/images/8.png`} alt="client" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default MisionVisionComponent;
