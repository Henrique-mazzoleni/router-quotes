import { useParams, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import QuoteComments from "./QuoteComments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import Button from "../components/ui/Button";

import styles from "./SingleQuote.module.css";

const SingleQuote = () => {
  const params = useParams();
  const quotesList = useSelector((state) => state.quotesList);
  const selectedQuote = quotesList.find((quote) => quote.id === params.quoteId);
  console.log(params);

  if (!selectedQuote) return <NoQuotesFound />;

  return (
    <div className={styles.quote}>
      <HighlightedQuote
        text={selectedQuote.text}
        author={selectedQuote.author}
      />
      <Route path={`/quotes/${selectedQuote.id}`} exact>
        <Link to={`/quotes/${selectedQuote.id}/comments`}>
          <Button className={styles.button}>Show Comments</Button>
        </Link>
      </Route>
      <Route path="/quotes/:quoteId/comments">
        <QuoteComments
          comments={selectedQuote.comments}
          id={selectedQuote.id}
        />
      </Route>
    </div>
  );
};

export default SingleQuote;
