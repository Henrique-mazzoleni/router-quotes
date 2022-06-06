import { useState } from "react";

import NewCommentForm from "./NewCommentForm";
import Button from "../ui/Button";

import styles from "./Comments.module.css";

const Comments = (props) => {
  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const toggleCommentFormHandler = () => {
    setShowCommentForm(state => !state);
  };

  const showCommentsHandler = () => {
    setShowComments(true);
  };

  const addCommentHandler = (text) => {
    const comment = {
      id: String(Math.random()),
      text
    }
    props.onCommentAdd(comment)
  }

  if (!showComments) {
    return (
      <Button onAction={showCommentsHandler} className={styles.button}>
        Show Comments
      </Button>
    );
  }

  return (
    <div className={styles.comments}>
      <h2>User Comments</h2>
      {showCommentForm ? (
        <NewCommentForm onHideForm={toggleCommentFormHandler} onSubmitForm={addCommentHandler} />
      ) : (
        <Button onAction={toggleCommentFormHandler} className={styles.button}>
          Add a Comment
        </Button>
      )}
      {props.comments}
    </div>
  );
};

export default Comments;
