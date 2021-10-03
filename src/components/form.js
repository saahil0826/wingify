import React, { useState } from "react";
import { validEmail, validPassword } from "../regex.js";
import "../assets/styles/form.scss";
import "../assets/styles/form.responsive.scss";


function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Individual");

  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMessage, setEmailErrMessage] = useState("");

  const [pwdError, setPwdError] = useState(false);
  const [pwdErrMessage, setPwdErrMessage] = useState("");

  const validate = () => {
    //email validator
    if (!validEmail.test(email) && email.length > 1) {
      setEmailErr(true);
      setEmailErrMessage("Please add a valid email address");
    } else if (email.length < 1) {
      setEmailErr(true);
      setEmailErrMessage("Required");
    } else {
      setEmailErr(null);
      setEmailErrMessage(null);
    }

    //password validator

    if (!validPassword.test(password) && password.length > 1) {
      setPwdError(true);

      setPwdErrMessage("Password must have an alphanumeric value");
    } else if (password.length < 1) {
      setPwdError(true);
      setPwdErrMessage("Required");
    } else {
      setPwdError(null);
      setPwdErrMessage(null);
    }

    console.log(`the email is ${email}`);
    console.log(`the password is ${password}`);
    console.log(`the date is ${date.length}`);
    console.log(`the color is ${type}`);
  };

  return (
    <div className="form-container">
      <div className="item-container">
        <h1 className="form-heading">Create an account</h1>
        <div className="form-element-container">
          <div className="form-element email">
            <label htmlFor="email">Enter your email</label>
            <div className="input-field-parent">
              <input
                id="email"
                type="email"
                value={email}
                placeholder="enter your email here"
                onChange={(e) => setEmail(e.target.value)}
                className={"input-field " + (emailErr && " invalidated")}
              />
              {emailErr ? (
                <div className="error">
                  <p>{emailErrMessage}</p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="form-element date">
            <label htmlFor="date">
              Date of birth <span id="optional">(Optional) </span>
            </label>
            <div className="input-field-parent">
              <input
                id="date"
                type="date"
                className="input-field"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element password">
            <label htmlFor="password">Choose a strong password </label>
            <div className="input-field-parent">
              <input
                id="password"
                type="password"
                value={password}
                placeholder="enter an alphanumeric password here"
                onChange={(e) => setPassword(e.target.value)}
                className={"input-field " + (pwdError && "invalidated")}
              />

              {pwdError ? (
                <div className="error">
                  <p>{pwdErrMessage}</p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="form-element radio">
            <label htmlFor="radio">Are you an agency or individual?</label>

            <div className="input-field-parent radio">
              <p>
                <input
                  type="radio"
                  id="test2"
                  name="radio-group"
                  value="Individual"
                  checked={type === "Individual"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="test2" id="radio-label">
                  Individual
                </label>
              </p>
              <p>
                <input
                  type="radio"
                  id="test1"
                  name="radio-group"
                  value="Agency"
                  checked={type === "Agency"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="test1" id="radio-label">
                  Agency
                </label>
              </p>
            </div>
          </div>
        </div>

        <button type="submit" onClick={validate}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
