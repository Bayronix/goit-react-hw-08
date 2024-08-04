import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegisterForm = (
    values,
    { setSubmitting, setErrors, resetForm }
  ) => {
    dispatch(register(values))
      .unwrap()
      .try(() => {
        resetForm();
      })
      .catch((error) => {
        setErrors({ apiError: error.message });
        setSubmitting(false);
        toast.error("Registration failed!", {
          duration: 3000,
        });
      });
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegisterForm}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div>
              <h3>Email</h3>
              <Field name="email" type="email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div>
              <h3>Name</h3>
              <Field name="name" type="text" />
              {errors.name && touched.name && <div>{errors.name}</div>}
            </div>
            <div>
              <h3>Password</h3>
              <Field name="password" type="password" />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </div>
            {errors.apiError && <div>{errors.apiError}</div>}
            <button type="submit" disabled={isSubmitting}>
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
