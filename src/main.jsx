import React from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SiteHeader from "./header";
import SiteFooter from "./footer";

import NotFoundPage from "./notfound";
import NotImplementedPage from "./notimplemented";
import IndexPage from "./landingpage/index";


function App(props) {
    return (
        <BrowserRouter>
            <div>
                <SiteHeader />
                <Switch>
                    <Route path="/" component={IndexPage}/>
                    <Route path="/OurStory" component={NotImplementedPage}/>
                    <Route path="/MenuComingSoon" component={NotImplementedPage}/>
                    <Route path="/HappyHourFullServiceConcept" component={NotImplementedPage}/>
                    <Route path="/ClermontLocation" component={NotImplementedPage}/>
                    <Route path="/LakeIvanhoeLocation" component={NotImplementedPage}/>
                    <Route path="/ContactUs" component={NotImplementedPage}/>
                    <Route path="/Videos" component={NotImplementedPage}/>
                    <Route path="/Photos" component={NotImplementedPage}/>
                    <Route path="/CateringCS" component={NotImplementedPage}/>
                    <Route path="/Directions" component={NotImplementedPage}/>
                    <Route path="/Careers" component={NotImplementedPage}/>
                    <Route path="/EmailJoin" component={NotImplementedPage}/>
                    <Route path="/Login" component={NotImplementedPage}/>
                    <Route path="/Reviews" component={NotImplementedPage}/>
                    <Route path="/LP" component={NotImplementedPage}/>
                    <Route path="/LoyaltyProgram" component={NotImplementedPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <SiteFooter />
            </div>
        </BrowserRouter>
    );
}


//the app's entry point
(function main() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
})();

export default hot(module);
