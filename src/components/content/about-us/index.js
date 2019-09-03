import React from 'react';

const AboutUsComponent = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <img className="about-img" src="https://4.bp.blogspot.com/-InDD3Hm_bhU/XB4_TK3TT7I/AAAAAAAAAJ4/r5tUeCOqq1MTchFh7D7pWdf582A4qYIIwCEwYBhgL/s1600/Businesswoman-working-at-a-computer-1280x720.jpg" alt="about-us" />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="about-text">
                            <h2 className="heading">Who we are?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam praesentium, distinctio dicta molestias dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam earum, provident ad, porro aperiam dolore, blanditiis, nihil pariatur eius adipisci consequuntur officiis. Excepturi, nostrum? Id incidunt nesciunt officia hic distinctio nihil pariatur.</p>
                            <a className="btn btn-info" href="/">Joine With Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutUsComponent;
