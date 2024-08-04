import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

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

  const handleLoginForm = (values, { resetForm, setSubmitting }) => {
    dispatch(logIn(values))
      .then(() => {
        resetForm();
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ name: "", password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLoginForm}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <h3>Email</h3>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <h3>Name</h3>
          <Field name="name" type="text" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <h3>Password</h3>
          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
