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

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginForm = (values) => {
    dispatch(logIn(values));
  };

  return (
    <Formik
      initialValues={{ name: "", password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLoginForm}
    >
      {({ errors, touched }) => (
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
