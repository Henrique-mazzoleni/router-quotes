import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./MainHeader";
import Quotes from "../../pages/Quotes";
import SingleQuote from "../../pages/SingleQuote";
import AddQuote from "../../pages/AddQuote";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Switch>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <SingleQuote />
        </Route>
        <Route path="/add_quote">
          <AddQuote />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Layout;
