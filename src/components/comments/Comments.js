import Button from "../ui/Button";

import styles from './Comments.module.css';

const Comments = (props) => {
  return (
    <div className={styles.comments}>
      <h2>User Comments</h2>
      <Button className={styles.button}>Add a Comment</Button>
      {props.comments}
    </div>
  );
};

export default Comments;
