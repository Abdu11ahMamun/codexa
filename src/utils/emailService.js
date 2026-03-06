import emailjs from "@emailjs/browser";

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_7941yml";
const EMAILJS_TEMPLATE_ID = "template_w0z832s";
const EMAILJS_PUBLIC_KEY = "5qTpzFQopfYQfB6tx";

emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData, formType = "Contact Form") => {
  try {
    const templateParams = {
      form_type: formType,
      from_name: formData.name || "",
      from_email: formData.email || "",
      phone: formData.phone || "Not provided",
      company: formData.company || "",
      service: formData.service || "",
      position: formData.position || "",
      portfolio: formData.portfolio || "",
      message: formData.message || "",
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, message: "Failed to send email. Please try again." };
  }
};
