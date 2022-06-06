import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./MainHeader";
import Quotes from "../../pages/Quotes";
import SingleQuote from "../../pages/SingleQuote";
import AddQuote from "../../pages/AddQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    text: "Fumar faz bem",
    author: "Sebastiao",
    created_at: new Date(1990, 1, 8),
    comments: [
      {
        id: "q1c1",
        text: "é...",
      },
      {
        id: "q1c2",
        text: "vdd.",
      },
    ],
  },
  {
    id: "q2",
    text: "Iaoéai",
    author: "Seu Zézinho",
    created_at: new Date(1991, 1, 4),
    comments: [
      {
        id: "q2c1",
        text: "que?",
      },
      {
        id: "q2c2",
        text: "qq ce ta falando?",
      },
    ],
  },
];

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Switch>
        <Route path="/quotes" exact>
          <Quotes list={DUMMY_QUOTES} />
        </Route>
        <Route path="/quotes/:quoteId">
          <SingleQuote list={DUMMY_QUOTES} />
        </Route>
        <Route path="/add_quote">
          <AddQuote />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Layout;
