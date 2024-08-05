import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

import styles from "./RegistrationPage.module.css";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegisterForm = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      resetForm();
      toast.success("Registration successful!", {
        duration: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegisterForm}
      >
        {({ errors, isSubmitting }) => (
          <Form className={styles.form}>
            <div>
              <h3>Email</h3>
              <Field name="email" type="email" className={styles.field} />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <h3>Name</h3>
              <Field name="name" type="text" className={styles.field} />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <h3>Password</h3>
              <Field name="password" type="password" className={styles.field} />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>
            {errors.apiError && (
              <div className={styles.error}>{errors.apiError}</div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
      <Toaster position="bottom-right" />
    </>
  );
};

export default RegistrationPage;
