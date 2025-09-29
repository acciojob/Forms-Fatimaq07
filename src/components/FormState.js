import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input id="full_name" type="text" value={form.full_name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input id="email" type="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input id="password" type="password" value={form.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input id="password_confirmation" type="password" value={form.password_confirmation} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
