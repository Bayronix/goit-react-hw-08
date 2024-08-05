import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";

import styles from "./LoginPage.module.css";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginForm = async (values, { resetForm, setSubmitting }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      resetForm();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLoginForm}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <h3>Email</h3>
            <Field name="email" type="email" className={styles.field} />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <h3>Name</h3>
            <Field name="name" type="text" className={styles.field} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <h3>Password</h3>
            <Field name="password" type="password" className={styles.field} />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Toaster position="bottom-right" />
    </>
  );
};

export default LoginPage;
