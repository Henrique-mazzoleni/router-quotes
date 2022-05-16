import { Fragment } from "react";
import { Route } from "react-router-dom";

import MainHeader from './MainHeader'
import Quotes from "../../pages/Quotes";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <Route path="/quotes">
        <Quotes />
      </Route>
    </Fragment>
  );
};

export default Layout;