import Button from "../ui/Button";

import styles from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <div className={styles.quote}>
      <div className={styles.text}>
        <h2>{props.text}</h2>
        <p>{props.author}</p>
      </div>
      <div className={styles.action}>
          <Button className={styles.button} >View Fullscreen</Button>
      </div>
    </div>
  );
};

export default QuoteItem;
