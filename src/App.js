import React from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Field required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Username should be an email";
    }

    if (!values.password) {
      errors.password = "Field required";
    } else if (values.password.length > 15) {
      errors.password = "Must be 15 characters or less";
    }

    return errors;
  };

  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Login Successful");
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <div>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email ? (
          <div id="emailError">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="pswField"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        {formik.errors.password ? (
          <div id="pswError">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" id="submitBtn">
        Submit
      </button>
    </form>
  );
}

export default App;
