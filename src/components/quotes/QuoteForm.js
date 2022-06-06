import React, { useState } from "react";

import Button from "../ui/Button";

import styles from "./QuoteForm.module.css";

const QuoteForm = () => {
  const [authorInput, setAuthorInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const [validAuthor, setValidAuthor] = useState(false);
  const [validText, setValidText] = useState(false);

  const [authorBlur, setAuthorBlur] = useState(false);
  const [textBlur, setTextBlur] = useState(false);

  const validAuthorInput = validAuthor || !authorBlur;
  const validTextInput = validText || !textBlur;

  const authorInputHandler = (event) => {
    setAuthorInput(event.target.value)
    if (!validAuthor && authorInput.trim() !== "") setValidAuthor(true);
  }
  
  const authorBlurHandler = () => {
    setAuthorBlur(true)
  }

  const textInputHandler = (event) => {
    setTextInput(event.target.value)
    if (!validText && textInput.trim() !== "") setValidText(true); 
  }

  const textBlurHandler = () => {
    setTextBlur(true)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validAuthor || !validText) return;

    console.log(
      "Submiting...",
      authorInput,
      textInput
    );

    setValidAuthor(false)
    setAuthorBlur(false)
    setAuthorInput('')
    setValidText(false)
    setTextBlur(false)
    setTextInput('')
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={authorInput}
          onChange={authorInputHandler}
          onBlur={authorBlurHandler}
          className={`${validAuthorInput ? "invalid" : ""}`}
        />
        {!validAuthorInput && <p>Field must not be empty</p>}
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          type="textfield"
          value={textInput}
          onChange={textInputHandler}
          onBlur={textBlurHandler}
          className={`${validTextInput ? "invalid" : ""}`}
        />
        {!validTextInput && <p>Field must not be empty</p>}
      </div>
      <div className={styles.actions}>
        <Button type="submit" className={styles.button}>
          Add Quote
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;
