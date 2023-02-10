import nodemailer from "nodemailer";
import config from "../config/config.js";
export async function sendMail(member, message) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: config.MANAGER_EMAIL,
      accessToken: config.ACCESS_TOKEN,
    },
  });

  const mailOptions = {
    from: "irascic03@gmail.com",
    to: member,
    subject: "E-commerce",
    text: message,
  };

  await transport.sendMail(mailOptions);
}
