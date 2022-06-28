import React, { Fragment } from "react";
import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const MainHeader = React.lazy(() => import("./MainHeader"));
const Quotes = React.lazy(() => import("../../pages/Quotes"));
const SingleQuote = React.lazy(() => import("../../pages/SingleQuote"));
const AddQuote = React.lazy(() => import("../../pages/AddQuote"));

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <Suspense fallback={<p>Page is Loading</p>}>
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
      </Suspense>
    </Fragment>
  );
};

export default Layout;
