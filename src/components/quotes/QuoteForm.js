import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";

import Button from "../ui/Button";

import styles from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isFillingForm, setIsFillingForm] = useState(false);

  const [authorInput, setAuthorInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const [validAuthor, setValidAuthor] = useState(false);
  const [validText, setValidText] = useState(false);

  const [authorBlur, setAuthorBlur] = useState(false);
  const [textBlur, setTextBlur] = useState(false);

  const validAuthorInput = validAuthor || !authorBlur;
  const validTextInput = validText || !textBlur;

  const authorInputHandler = (event) => {
    setAuthorInput(event.target.value);
    if (!validAuthor && authorInput.trim() !== "") setValidAuthor(true);
  };

  const authorBlurHandler = () => {
    setAuthorBlur(true);
  };

  const textInputHandler = (event) => {
    setTextInput(event.target.value);
    if (event.target.value.trim() !== "") setValidText(true);
    else setValidText(false);
  };

  const textBlurHandler = () => {
    setTextBlur(true);
  };

  const fillingHandler = () => {
    setIsFillingForm(true);
  };

  const finishedHandler = () => {
    setIsFillingForm(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validAuthor || !validText) {
      setAuthorBlur(true);
      setTextBlur(true);
      return;
    }

    props.onAddQuote(authorInput, textInput);

    setValidAuthor(false);
    setAuthorBlur(false);
    setAuthorInput("");
    setValidText(false);
    setTextBlur(false);
    setTextInput("");
  };

  return (
    <Fragment>
      <Prompt
        when={isFillingForm}
        message={() => "You will lose form data if you leave this page."}
      />
      <form
        onFocus={fillingHandler}
        onSubmit={submitHandler}
        className={styles.form}
      >
        <div className={styles.input}>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            value={authorInput}
            onChange={authorInputHandler}
            onBlur={authorBlurHandler}
            className={`${validAuthorInput ? "" : styles.invalid}`}
          />
          {!validAuthorInput && <p>Field must not be empty</p>}
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            type="textfield"
            value={textInput}
            onChange={textInputHandler}
            onBlur={textBlurHandler}
            className={`${validTextInput ? "" : styles.invalid}`}
          />
          {!validTextInput && <p>Field must not be empty</p>}
        </div>
        <div className={styles.actions}>
          <Button
            onAction={finishedHandler}
            type="submit"
            className={styles.button}
          >
            Add Quote
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default QuoteForm;
