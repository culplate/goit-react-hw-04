import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SearchBar = ({ onSearch }) => {
  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, "Must be at least 3 symbols long")
      .max(50, "Too Long! (max. 50 symbols)")
      .required("Input your search request"),
  });
  return (
    <header className={css.head}>
      <Formik
        validationSchema={searchSchema}
        initialValues={{
          search: "",
        }}
        onSubmit={(values, actions) => {
          onSearch(values.search);
          actions.resetForm({
            values: {
              search: "",
            },
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.searchForm}>
            <Field
              className={css.searchInput}
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search..."
            />
            {errors.search && touched.search && toast(errors.search)}
            <Toaster id="123" position="top-right" />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </header>
  );
};
