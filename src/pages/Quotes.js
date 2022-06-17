import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

import QuoteItem from "../components/quotes/QuoteItem";
import Button from "../components/ui/Button";

import styles from "./Quotes.module.css";

const Quotes = () => {
  const [orderAscending, setOrderAscending] = useState(true);
  const [renderedQuotes, setRenderedQuotes] = useState([]);
  const stateQuotesList = useSelector(state => state.quotesList)
  const quotesList = useMemo(() => [...stateQuotesList], [stateQuotesList])

  useEffect(() => {
    quotesList.sort((a, b) => {
      if (orderAscending) return new Date(a.created_at) - new Date(b.created_at);
      return new Date(b.created_at) - new Date(a.created_at);
    });
    setRenderedQuotes(
      quotesList.map((quote) => (
        <QuoteItem key={quote.id} id={quote.id} text={quote.text} author={quote.author} />
      ))
    );
  }, [orderAscending, quotesList]);

  const toggleOrderHandler = () => {
    setOrderAscending((state) => !state);
  };

  return (
    <div className={styles.quotes}>
      <div className={styles.sorting}>
        <Button onAction={toggleOrderHandler} className={styles.button}>
          {orderAscending ? "Sort Descending" : "Sort Ascending"}
        </Button>
      </div>
      <div className={styles.list}>{renderedQuotes}</div>
    </div>
  );
};

export default Quotes;
