import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullNameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Confirm Password:", confirmRef.current.value);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input id="full_name" type="text" ref={fullNameRef} />
        </div>
        <div>
          <label>Email</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div>
          <label>Password</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input id="password_confirmation" type="password" ref={confirmRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
