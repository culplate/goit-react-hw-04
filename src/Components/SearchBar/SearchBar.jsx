import css from "./SearchBar.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SearchBar = ({ val, onSearch }) => {
  return (
    <header className={css.head}>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values, actions) => {
          console.log(val);
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            type="text"
            name="search"
            autoComplete="off"
            value={val}
            onChange={onSearch}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};
