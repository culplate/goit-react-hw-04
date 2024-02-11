import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <p className={css.error}>
      Whoops! Something bad happened, try reloading page 🥲
    </p>
  );
};
