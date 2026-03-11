const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // Get free key at https://web3forms.com

export async function submitForm(data: Record<string, string>, formName: string) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `${formName} - ${data.name || "Website Lead"}`,
      from_name: "XpMechanics Website",
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
