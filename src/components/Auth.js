import React, { useState } from "react";
import { auth } from "../firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setPassword("");
        setEmail("");
        console.log("signed up!", userCredentials);
      });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <input
                type="submit"
                className="ui blue submit button"
                value="Register"
              />
            </div>
          </div>
          <div className="middle aligned column">
            <div className="ui  button">
              <i className="google icon"></i>
              Sign Up with Google
            </div>
            <br />
            <div className="ui  button">
              <i className="github icon"></i>
              Sign Up with Github
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </form>
  );
};

export default Auth;
