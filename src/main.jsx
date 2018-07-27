import React from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SiteHeader from "./header";
import SiteFooter from "./footer";

import NotFoundPage from "./notfound";
import NotImplementedPage from "./notimplemented";
import IndexPage from "./landingpage/index";

import buildURL from "./paths";


function App(props) {
    return (
        <BrowserRouter>
            <div>
                <SiteHeader />
                <Switch>
                    <Route path={buildURL("/")} component={IndexPage}/>
                    <Route path={buildURL("OurStory")} component={NotImplementedPage}/>
                    <Route path={buildURL("MenuComingSoon")} component={NotImplementedPage}/>
                    <Route path={buildURL("HappyHourFullServiceConcept")} component={NotImplementedPage}/>
                    <Route path={buildURL("ClermontLocation")} component={NotImplementedPage}/>
                    <Route path={buildURL("LakeIvanhoeLocation")} component={NotImplementedPage}/>
                    <Route path={buildURL("ContactUs")} component={NotImplementedPage}/>
                    <Route path={buildURL("Videos")} component={NotImplementedPage}/>
                    <Route path={buildURL("Photos")} component={NotImplementedPage}/>
                    <Route path={buildURL("CateringCS")} component={NotImplementedPage}/>
                    <Route path={buildURL("Directions")} component={NotImplementedPage}/>
                    <Route path={buildURL("Careers")} component={NotImplementedPage}/>
                    <Route path={buildURL("EmailJoin")} component={NotImplementedPage}/>
                    <Route path={buildURL("Login")} component={NotImplementedPage}/>
                    <Route path={buildURL("Reviews")} component={NotImplementedPage}/>
                    <Route path={buildURL("LP")} component={NotImplementedPage}/>
                    <Route path={buildURL("LoyaltyProgram")} component={NotImplementedPage}/>
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
