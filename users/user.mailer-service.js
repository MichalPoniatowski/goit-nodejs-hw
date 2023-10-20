const { sendMail } = require("../mailer/mailer.service");
const { serverPort } = require("../config");

const sendUserVerificationMail = async (email, verificationToken) => {
  const mailOptions = {
    to: email,
    subject: "Welcome to our site :)",
    text: `Hello! Please verify your account by visiting http://localhost:3000/users/verify/${verificationToken}`,
    html: `<h2>Hello!</h2><br/>Please verify your account by clicking <a href="http://localhost:3000/users/verify/${verificationToken}">here</a>!`,
  };
  await sendMail(mailOptions);
};

module.exports = {
  sendUserVerificationMail,
};

// text: `Hello! Please verify your account by visiting http://localhost:${serverPort}/users/verify/${verificationToken}`,
//     html: `<h2>Hello!</h2><br/>Please verify your account by clicking <a href="http://localhost:${serverPort}/users/verify/${verificationToken}">here</a>!`,
