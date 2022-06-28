import { useDispatch } from "react-redux";

import Comments from "../components/comments/Comments";
import CommentItem from "../components/comments/CommentItem";
import { quotesActions } from "../store";

const QuoteComments = (props) => {
    const dispatch = useDispatch()

    const commentAddHandler = (comment) => {
        dispatch(quotesActions.addComment({
          quoteId: props.id,
          comment
        }))
      }

  let comments = (
    <CommentItem>
      There are no comments for this quote. Be the first to make one!
    </CommentItem>
  );

  if (props.comments.length !== 0)
    comments = props.comments.map((comment) => (
      <CommentItem key={comment.id}>{comment.text}</CommentItem>
    ));

  return <Comments comments={comments} onCommentAdd={commentAddHandler} />;
};

export default QuoteComments;
