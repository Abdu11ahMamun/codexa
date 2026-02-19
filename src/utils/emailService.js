const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:9999";

export const sendEmail = async (formData, formType = "Contact Form") => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        formType,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Network error" };
  }
};
