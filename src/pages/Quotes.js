import { useEffect, useState } from "react";

import QuoteItem from "../components/quotes/QuoteItem";
import Button from "../components/ui/Button";

import styles from "./Quotes.module.css";

const Quotes = (props) => {
  const [orderAscending, setOrderAscending] = useState(true);
  const [renderedQuotes, setRenderedQuotes] = useState([]);

  useEffect(() => {
    props.list.sort((a, b) => {
      if (orderAscending) return a.created_at - b.created_at;
      return b.created_at - a.created_at;
    });
    setRenderedQuotes(
      props.list.map((quote) => (
        <QuoteItem key={quote.id} id={quote.id} text={quote.text} author={quote.author} />
      ))
    );
  }, [orderAscending, props.list]);

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
