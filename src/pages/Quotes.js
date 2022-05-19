import { useEffect, useState } from "react";

import QuoteItem from "../components/quotes/QuoteItem";
import Button from "../components/ui/Button";

import styles from "./Quotes.module.css";

const DUMMY_QUOTES = [
  {
    id: "q1",
    text: "Fumar faz bem",
    author: "Sebastiao",
    created_at: new Date(1990, 1, 8),
  },
  {
    id: "q2",
    text: "iaoéai",
    author: "Seu Zézinho",
    created_at: new Date(1991, 1, 4),
  },
];

const Quotes = () => {
  const [orderAscending, setOrderAscending] = useState(true);
  const [renderedQuotes, setRenderedQuotes] = useState([]);

  useEffect(() => {
    DUMMY_QUOTES.sort((a, b) => {
      if (orderAscending) return a.created_at - b.created_at;
      return b.created_at - a.created_at;
    });
    setRenderedQuotes(
      DUMMY_QUOTES.map((quote) => (
        <QuoteItem key={quote.id} text={quote.text} author={quote.author} />
      ))
    );
  }, [orderAscending]);

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
