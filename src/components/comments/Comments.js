import { useState } from "react";
import Button from "../ui/Button";

import styles from "./Comments.module.css";

const Comments = (props) => {
  const [showComments, setShowComments] = useState(false);

  const showCommentsHandler = () => {
    setShowComments(true);
  };

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

      <Button className={styles.button}>Add a Comment</Button>
      {props.comments}
    </div>
  );
};

export default Comments;
