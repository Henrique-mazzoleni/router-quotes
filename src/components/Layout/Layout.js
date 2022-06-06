import { Fragment, useState } from "react";
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
  const [quoteList, setQuoteList] = useState(DUMMY_QUOTES)

  const addQuoteHandler = (author, text) => {
    setQuoteList(state => [{id: String(Math.random()), text, author, created_at: new Date(), comments: []}, ...state])
  }

  const addCommentHandler = (quoteId, comment) => {
    const quote = quoteList.find((quote) => quote.id === quoteId)
    const quote_index = quoteList.indexOf(quote)

    const comments = [comment, ...quoteList[quote_index].comments]
    quote.comments = comments

    const newList = [...quoteList]
    newList[quote_index] = quote
    setQuoteList(newList)
  }

  return (
    <Fragment>
      <MainHeader />
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Switch>
        <Route path="/quotes" exact>
          <Quotes list={quoteList} />
        </Route>
        <Route path="/quotes/:quoteId">
          <SingleQuote list={quoteList} onAddComment={addCommentHandler} />
        </Route>
        <Route path="/add_quote">
          <AddQuote onAddQuote={addQuoteHandler} />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Layout;
