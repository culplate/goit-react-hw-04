import css from "./SearchBar.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SearchBar = ({ onSearch }) => {
  return (
    <header className={css.head}>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values, actions) => {
          onSearch(values);
        }}
      >
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
