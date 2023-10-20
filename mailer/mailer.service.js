const nodemailer = require("nodemailer");
const { gmailPassword, gmailUser } = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPassword,
  },
});

const sendMail = async (options) => {
  try {
    await transporter.sendMail(options);
  } catch (e) {
    console.log(e);
    throw new Error("Mail sending falied");
  }
};

module.exports = {
  sendMail,
};
