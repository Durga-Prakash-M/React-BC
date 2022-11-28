/* without lifting state up */

import React, { useEffect, useState } from "react";

function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(() => initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submit) {
      alert("signed up successfully");
    }
  }, [formErrors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const re = /.*@.*\..*/;
    if (!values.username) {
      errors.username = "Username is Required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!re.test(values.email)) {
      errors.email = "Enter valid email id";
    }
    if (!values.password) {
      errors.password = "password is required!";
      return errors;
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "please re-type password";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "password and confirm password are not same";
    }
    return errors;
  };

  return (
    <>
      {/* <p>{JSON.stringify(formValues)}</p> */}
      <form onSubmit={handleSubmit}>
        <table>
          <caption>Registration Form</caption>
          <tbody>
            <tr>
              <td>
                <label>Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="username"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="Enter username"
                />
              </td>
              <td>{formErrors.username}</td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </td>
              <td>{formErrors.email}</td>
            </tr>
            <tr>
              <td>
                <label>password:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </td>
              <td>{formErrors.password}</td>
            </tr>
            <tr>
              <td>
                <label>confirm Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  placeholder="re type password"
                />
              </td>
              <td>{formErrors.confirmPassword}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Sign Up" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
export default SignUp;
// export default function App() {}
