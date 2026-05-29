export async function sendEmail({ to, subject, htmlContent }) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL,
        name: "High Desert Media",
      },

      to: [
        {
          email: to,
          name: "HDM",
        },
      ],

      subject,
      htmlContent,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data;
}
