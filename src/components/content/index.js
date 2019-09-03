import React, { Fragment } from 'react';
import BannerComponent from './banner';
import AboutUsComponent from './about-us';
import MainFeaturesComponent from './main-teature';
import MisionVisionComponent from './mision-vision';
import CompleatProjectComponent from './compleate-projects';
import OurProductComponent from './custom-templater';
import BusinesssSolutionComponent from './business-solution';
import OurTeamMemberComponent from './our-team';
import OurClientsComponents from './our-clients';



const ContentComponent = () => {
    return (
        <Fragment>
            <BannerComponent />
            <AboutUsComponent />
            <MainFeaturesComponent />
            <MisionVisionComponent />
            <BusinesssSolutionComponent />
            <CompleatProjectComponent />
            <OurProductComponent />
            <OurTeamMemberComponent />
            <OurClientsComponents />
        </Fragment>
    );
};


export default ContentComponent;
