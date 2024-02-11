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
          onSearch(values.search);
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};
