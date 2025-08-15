import React, { useState, useEffect } from "react";
import { api } from "../../api";

export default function NoticeForm({ existingData, onSuccess }) {
  const [form, setForm] = useState({
    noticeId: "",
    header: "",
    body: "",
    date: "",
    place: "",
    forWhom: "",
    by: "",
  });

  useEffect(() => {
    if (existingData) {
      setForm({
        noticeId: existingData.noticeId || "",
        header: existingData.header || "",
        body: existingData.body || "",
        date: existingData.date ? existingData.date.slice(0, 10) : "",
        place: existingData.place || "",
        forWhom: existingData.forWhom || "",
        by: existingData.by || "",
      });
    }
  }, [existingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (existingData) {
        await api.put(`/notices/${existingData._id}`, form);
      } else {
        await api.post("/notices", form);
      }
      onSuccess();
    } catch (err) {
      console.error("Error saving notice", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Notice ID</label>
      <input name="noticeId" value={form.noticeId} onChange={handleChange} required />

      <label>Notice Header</label>
      <input name="header" value={form.header} onChange={handleChange} required />

      <label>Body</label>
      <textarea name="body" value={form.body} onChange={handleChange} required />

      <label>Date</label>
      <input type="date" name="date" value={form.date} onChange={handleChange} required />

      <label>Place</label>
      <input name="place" value={form.place} onChange={handleChange} required />

      <label>For Whom</label>
      <input name="forWhom" value={form.forWhom} onChange={handleChange} required />

      <label>By</label>
      <input name="by" value={form.by} onChange={handleChange} required />

      <button type="submit">{existingData ? "Update" : "Create"}</button>
    </form>
  );
}
