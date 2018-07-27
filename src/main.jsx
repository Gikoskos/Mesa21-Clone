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
                    <Route exact path="/" component={IndexPage}/>
                    <Route exact path="/OurStory" component={NotImplementedPage}/>
                    <Route exact path="/MenuComingSoon" component={NotImplementedPage}/>
                    <Route exact path="/HappyHourFullServiceConcept" component={NotImplementedPage}/>
                    <Route exact path="/ClermontLocation" component={NotImplementedPage}/>
                    <Route exact path="/LakeIvanhoeLocation" component={NotImplementedPage}/>
                    <Route exact path="/ContactUs" component={NotImplementedPage}/>
                    <Route exact path="/Videos" component={NotImplementedPage}/>
                    <Route exact path="/Photos" component={NotImplementedPage}/>
                    <Route exact path="/CateringCS" component={NotImplementedPage}/>
                    <Route exact path="/Directions" component={NotImplementedPage}/>
                    <Route exact path="/Careers" component={NotImplementedPage}/>
                    <Route exact path="/EmailJoin" component={NotImplementedPage}/>
                    <Route exact path="/Login" component={NotImplementedPage}/>
                    <Route exact path="/Reviews" component={NotImplementedPage}/>
                    <Route exact path="/LP" component={NotImplementedPage}/>
                    <Route exact path="/LoyaltyProgram" component={NotImplementedPage}/>
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
