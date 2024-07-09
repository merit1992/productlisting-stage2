import style from "./Button.module.css";

function Button({ content }) {
  return <button className={style.btn_primary}>{content}</button>;
}

export default Button;
