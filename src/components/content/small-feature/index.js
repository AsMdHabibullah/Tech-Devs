import React from 'react';
import PropTypes from 'prop-types';

const SmallFeatureComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-4 col-sm-12">
                    <div className="about-smallservice">
                        <i class="fab fa-accessible-icon" aria-hidden="true"></i>
                        <h5>Business with Thought Leadership</h5>
                    </div>
                </div>

                <div className="col-xl-4 col-md-4 col-sm-12">
                    <div className="about-smallservice">
                        <i class="fab fa-accessible-icon" aria-hidden="true"></i>
                        <h5>Business with Thought Leadership</h5>
                    </div>
                </div>

                <div className="col-xl-4 col-md-4 col-sm-12">
                    <div className="about-smallservice">
                        <i class="fab fa-accessible-icon" aria-hidden="true"></i>
                        <h5>Business with Thought Leadership</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

SmallFeatureComponent.propTypes = {};

export default SmallFeatureComponent;
