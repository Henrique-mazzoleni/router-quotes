import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentItem from "../components/comments/CommentItem";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import styles from "./SingleQuote.module.css";

const SingleQuote = (props) => {
  const params = useParams();
  const selectedQuote = props.list.find((quote) => quote.id === params.quoteId);

  const commentAddHandler = (comment) => {
    props.onAddComment(selectedQuote.id, comment)
  }

  if (!selectedQuote) return <NoQuotesFound />

  let comments = (
    <CommentItem>There are no comments for this quote. Be the first to make one!</CommentItem>
  );

  if (selectedQuote.comments.length !== 0)
    comments = selectedQuote.comments.map((comment) => (
      <CommentItem key={comment.id}>{comment.text}</CommentItem>
    ));

  return (
    <div className={styles.quote}>
      <HighlightedQuote
        text={selectedQuote.text}
        author={selectedQuote.author}
      />
      <Comments comments={comments} onCommentAdd={commentAddHandler} />
    </div>
  );
};

export default SingleQuote;
