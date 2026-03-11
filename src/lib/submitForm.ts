const WEB3FORMS_KEY = "85caa0b7-8286-4e9b-9f8b-605e077640bf";

export async function submitForm(data: Record<string, string>, formName: string) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `${formName} - ${data.name || "Website Lead"}`,
      from_name: "XpMechanics Website",
      // Auto-reply to user
      autoresponse: true,
      autoresponse_from: "XpMechanics",
      autoresponse_sender: "xpmechanics@gmail.com",
      autoresponse_subject: "Thanks for contacting XpMechanics! 🔧",
      autoresponse_message: `Hi ${data.name || "there"},\n\nThank you for reaching out to XpMechanics! We've received your ${formName.toLowerCase()} and our team will get back to you within 30 minutes.\n\nIn the meantime, feel free to WhatsApp us at +91-93477-32437 for instant support.\n\nYour Details:\n${Object.entries(data).filter(([,v]) => v).map(([k,v]) => `• ${k}: ${v}`).join("\n")}\n\nRide Safe,\nTeam XpMechanics 🏍️`,
      ...data,
    }),
  });

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || "Form submission failed");
  }

  // Also notify on WhatsApp
  const waFields = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("%0A");
  const waMsg = `${formName}:%0A${waFields}`;
  window.open(`https://wa.me/919347732437?text=${encodeURIComponent(waMsg)}`, "_blank");

  return result;
}
