import { useState } from "react";

import Button from "../ui/Button";
import styles from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const [commentInput, setCommentInput] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [inputBlur, setInputBlur] = useState(false);

  const valid = validInput || !inputBlur;

  const commentInputHandler = (event) => {
    setCommentInput(event.target.value);
    if (event.target.value.trim() !== '') setValidInput(true)
    else setValidInput(false)
  };

  const blurHandler = () => {
    setInputBlur(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validInput) {
        setInputBlur(true)
        return
    }

    props.onSubmitForm(commentInput)
    props.onHideForm();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.input}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          value={commentInput}
          onChange={commentInputHandler}
          onBlur={blurHandler}
          className={`${valid ? '' : styles.invalid}`}
        />
        {!valid && <p>Field must not be empty!</p>}
      </div>
      <div className={styles.actions}>
        <Button type="submit" className={styles.button}>
          Add Comment
        </Button>
      </div>
    </form>
  );
};

export default NewCommentForm;
