import { Formik, Form, Field } from "formik";

const LoginForm = () => {
  const LoginFormValue = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ name: "", password: "", email: "" }}
      onSubmit={LoginFormValue}
    >
      <Form>
        <h3>email</h3>
        <Field name="email" type="email" />
        <h3>Name</h3>
        <Field name="name" type="text" />
        <h3>Password</h3>
        <Field name="password" type="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
