const API_BASE_URL = "http://localhost/public/user";

export const userApi = {
  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/register.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Important for CORS with cookies
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Registration error:", error);
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
};
