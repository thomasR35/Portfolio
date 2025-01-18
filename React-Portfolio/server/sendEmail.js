const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thomasriou.35@gmail.com",
    pass: "llvz sqzr xnsk muzm",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "thomasriou.35@gmail.com",
    subject: `Message de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Erreur lors de l'envoi de l'email");
    }
    res.status(200).send("Message envoyé avec succès");
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
