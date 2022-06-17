import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentItem from "../components/comments/CommentItem";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { quotesActions } from '../store';

import styles from "./SingleQuote.module.css";

const SingleQuote = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const quotesList = useSelector(state => state.quotesList)
  const selectedQuote = quotesList.find((quote) => quote.id === params.quoteId);

  const commentAddHandler = (comment) => {
    dispatch(quotesActions.addComment({
      quoteId: selectedQuote.id,
      comment
    }))
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
