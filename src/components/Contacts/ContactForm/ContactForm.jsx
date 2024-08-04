import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(addContact(values));
      resetForm();
      toast.success(`Contact added`, {
        duration: 3000,
      });
    } catch (error) {
      toast.error("Failed to add contact", {
        duration: 3000,
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className={styles.form}>
          <h3>Name</h3>
          <Field
            className={styles.field}
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <h3>Phone Number</h3>
          <Field
            className={styles.field}
            type="text"
            name="number"
            value={values.number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />

          <button className={styles.button} type="submit">
            Add Contact
          </button>
          <Toaster position="bottom-right" />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
