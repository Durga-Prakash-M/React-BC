import React, { useEffect, useState, useContext, createContext } from "react";

const UseUserNameInclusion = createContext();
function App() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(() => initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [includeUsername, setIncludeUsername] = useState(true);
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submit) {
      alert("signed up successfully");
    }
  }, [formErrors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckbox = (event) => {
    setIncludeUsername((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const re = /.*@.*\..*/;
    if (includeUsername && !values.username) {
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
    <UseUserNameInclusion.Provider value={includeUsername}>
      <input
        type="checkbox"
        name="includeUsername"
        onClick={handleCheckbox}
        defaultChecked
      />
      <label>include username</label>
      <SignUp
        formValues={formValues}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </UseUserNameInclusion.Provider>
  );
}

function SignUp(props) {
  const shouldIncludeUsername = useContext(UseUserNameInclusion);
  const usernameField = shouldIncludeUsername ? (
    <tr>
      <td>
        <label>Name:</label>
      </td>
      <td>
        <input
          type="text"
          name="username"
          value={props.formValues.name}
          onChange={(event) => props.handleChange(event)}
          placeholder="Enter username"
        />
      </td>
      <td>{props.formErrors.username}</td>
    </tr>
  ) : (
    <tr></tr>
  );
  return (
    <>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <table>
          <caption>Registration Form</caption>
          <tbody>
            {usernameField}
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={props.formValues.email}
                  onChange={(event) => props.handleChange(event)}
                  placeholder="Enter email"
                />
              </td>
              <td>{props.formErrors.email}</td>
            </tr>
            <tr>
              <td>
                <label>password:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={props.formValues.password}
                  onChange={(event) => props.handleChange(event)}
                  placeholder="Enter password"
                />
              </td>
              <td>{props.formErrors.password}</td>
            </tr>
            <tr>
              <td>
                <label>confirm Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={props.formValues.confirmPassword}
                  onChange={(event) => props.handleChange(event)}
                  placeholder="re type password"
                />
              </td>
              <td>{props.formErrors.confirmPassword}</td>
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
export default App;
// export default function App() {}
