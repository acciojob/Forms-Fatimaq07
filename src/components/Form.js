import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <div>
          <label>Full Name</label>
          <input id="full_name" type="text" />
        </div>
        <div>
          <label>Email</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input id="password_confirmation" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
