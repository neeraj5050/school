const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle contact form submissions
app.post("/contact", async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  // Setup your email transporter (using Gmail example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",        // 🔒 Use environment variables in production
      pass: "your-app-password"           // Use App Password, not Gmail password
    }
  });

  const mailOptions = {
    from: email,
    to: "your-email@gmail.com",          // Where you want to receive the message
    subject: "New Contact Form Submission",
    text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
