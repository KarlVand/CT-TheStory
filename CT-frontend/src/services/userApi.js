const API_BASE_URL = "/api";

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

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || `HTTP error! status: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },
};
