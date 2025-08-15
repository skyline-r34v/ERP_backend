import React, { useState } from "react";

export default function UsersForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name="name" value={form.name} onChange={handleChange} />
      <label>Email:</label>
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}
