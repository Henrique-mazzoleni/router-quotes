import styles from "./Button.module.css";

const Button = (props) => {
  const classes = `${props.className} ${styles.button}`;

  return (
    <button onClick={props.onAction} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
