import styles from "./Button.module.scss";

const Button = (props) => {
  const classes = `${styles.button}  ${props.className}`;
  return (
    <button className={classes} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
