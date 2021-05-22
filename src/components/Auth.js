import React from "react";

const Auth = () => {
  return (
    <div>
      <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
          <div class="column">
            <div class="ui form">
              <div class="field">
                <label>Username</label>
                <div class="ui left icon input">
                  <input type="text" placeholder="Username" />
                  <i class="user icon"></i>
                </div>
              </div>
              <div class="field">
                <label>Password</label>
                <div class="ui left icon input">
                  <input type="password" />
                  <i class="lock icon"></i>
                </div>
              </div>
              <div class="ui blue submit button">Register</div>
            </div>
          </div>
          <div class="middle aligned column">
            <div class="ui  button">
              <i class="google icon"></i>
              Sign Up with Google
            </div>
            <br />
            <div class="ui  button">
              <i class="github icon"></i>
              Sign Up with Github
            </div>
          </div>
        </div>
        <div class="ui vertical divider">Or</div>
      </div>
    </div>
  );
};

export default Auth;
