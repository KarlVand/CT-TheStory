// frontend/src/services/userApi.js
const API_BASE_URL = "http://localhost/CT-backend/public"; // Adjust to your PHP backend URL

export const userApi = {
  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/register.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      throw new Error("Registration failed: " + error.message);
    }
  },

  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/login.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      return await response.json();
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  },

  async getUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}/users.php`);
      return await response.json();
    } catch (error) {
      throw new Error("Failed to fetch users: " + error.message);
    }
  },
};
