// src/components/Users/UserForm.jsx
import { useState } from "react";
import { userApi } from "../../services/userApi";
import styles from "./Users.module.scss";
/* import axios from "axios"; */

// frontend/src/components/Users/UserForm.jsx

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await userApi.register(formData);
      if (result.success) {
        setMessage("Registration successful!");
        setFormData({ name: "", email: "", password: "" }); // Reset form
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {message && <div className="success">{message}</div>}
      {error && <div className={styles.error}>{error}</div>}
      <form
        onSubmit={handleSubmit}
        className={styles.form}>
        <div className={styles.form}>
          <label
            className={styles.label}
            htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Similar fields for email and password */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserForm;
