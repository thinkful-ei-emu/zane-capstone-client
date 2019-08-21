import React from "react";

export default function SignUpForm(props) {
  return (
    <section className="signupformsection" role="main">
      <form className="sign-up-form" onSubmit={props.handleSubmit}>
        <label>Enter First Name</label>
        <input name="first_name" aria-label="First Name" type="text" required />
        <label>Enter Last Name</label>
        <input name="last_name" aria-label="Last Name" type="text" required />
        <label> Enter Username</label>
        <input type="text" name="user_name" aria-label="User Name" required />
        <label>Enter Password</label>
        <input type="password" aria-label="Password" name="password" required />
        <p className="passpara">
          Password must contain one uppercase one lower case one special
          character one number and be 8 characters long.
        </p>
        <label>Enter Email</label>
        <input type="text" name="user_email" aria-label="Email" required />
        <button className="submitbutton" type="submit">
          Submit
        </button>
      </form>
      <p className="red">{props.error}</p>
    </section>
  );
}
