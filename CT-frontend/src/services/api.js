// frontend/src/services/api.js
const API_BASE_URL = "http://localhost/CT-TheStory/CT-backend/api";

export const api = {
  async getUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}/users.php`);
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  async createUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/users.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};
