import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentItem from "../components/comments/CommentItem";

import styles from "./SingleQuote.module.css";

const SingleQuote = (props) => {
  const params = useParams();
  const selectedQuote = props.list.find((quote) => quote.id === params.quoteId);

  const comments = selectedQuote.comments.map((comment) => (
    <CommentItem key={comment.id}>{comment.text}</CommentItem>
  ));

  return (
    <div className={styles.quote}>
      <HighlightedQuote
        text={selectedQuote.text}
        author={selectedQuote.author}
      />
      <Comments comments={comments} />
    </div>
  );
};

export default SingleQuote;
