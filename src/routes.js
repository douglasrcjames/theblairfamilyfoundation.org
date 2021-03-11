import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from './components/Home'
import withTracker from './components/misc/WithTracker';
import Focus from "./components/focus/Focus";
import AboutUs from "./components/AboutUs";

const Page404 = ({ location }) => (
  <div className="wrapper">
    {/* <img src={error404} alt="error404" className="large responsive center" /> */}
    <p className="m-padding">
      Uh oh... doesn't look like this page exists. Check the web address and try
      again.
    </p>
  </div>
);

export class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={withTracker(Home)} />
        <Route exact path="/about-us" component={withTracker(AboutUs)} />
        <Route exact path="/our-focus/" component={withTracker(Focus)} />
        {/* <Route exact path="/our-focus/education" component={withTracker(Education)} />
        <Route exact path="/our-focus/equality" component={withTracker(Equality)} />
        <Route exact path="/our-focus/environment" component={withTracker(Environment)} /> */}
        <Route component={withTracker(Page404)} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
