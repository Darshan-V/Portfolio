import { NextApiRequest, NextApiResponse } from "next"

import nodemailer from "nodemailer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body
    console.log(req.body)

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // e.g., Gmail, Yahoo, etc.
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    })

    // Configure the email
    const mailOptions = {
      from: email,
      to: process.env.AUTH_EMAIL,
      subject: "New message from your Portfolio",
      html: `
      <h1 style="color:#edcc12 ; text-decoration: underline; text-decoration-color:#edcc12; padding: 5px;">New message from your website</h1>
      <h1 style="color-blue"><strong>Name:</strong> ${name}</h1>
      <h1 style="color-blue"><strong>Email:</strong> ${email}</h1>
      <h1 style="color-blue"><strong>Message:</strong> ${message}</h1>
    `,
    }

    try {
      // Send the email
      await transporter.sendMail(mailOptions)
      res
        .status(200)
        .json({ message: "Email sent successfully", payload: req.body })
    } catch (error) {
      console.error("Error:", error)
      res.status(500).json({ error: "Error sending email" })
    }
  } else {
    res.status(405).json({ error: "Method not allowed" })
  }
}
