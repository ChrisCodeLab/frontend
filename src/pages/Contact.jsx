import { useState } from "react";
import { sendContact } from "../services/contactService";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendContact(form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="section container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <br /><br />

        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br /><br />

        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <br /><br />

        <button type="submit">Send</button>
      </form>

      <p>{status}</p>
    </div>
  );
}

export default Contact;