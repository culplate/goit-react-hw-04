import css from "./SearchBar.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SearchBar = () => {
  return (
    <header className={css.head}>
      <Formik>
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            type="text"
            name="search"
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};
