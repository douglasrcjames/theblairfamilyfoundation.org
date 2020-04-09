import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from './components/Home'
import Press from './components/Press.js'
import withTracker from './components/misc/WithTracker';

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
        <Route exact path="/press" component={withTracker(Press)} />
        <Route component={withTracker(Page404)} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
