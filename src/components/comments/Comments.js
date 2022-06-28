import { useState } from "react";

import NewCommentForm from "./NewCommentForm";
import Button from "../ui/Button";

import styles from "./Comments.module.css";

const Comments = (props) => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const toggleCommentFormHandler = () => {
    setShowCommentForm(state => !state);
  };

  const addCommentHandler = (text) => {
    const comment = {
      id: String(Math.random()),
      text
    }
    props.onCommentAdd(comment)
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
