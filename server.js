<<<<<<< Updated upstream
const app = require('./app')

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
=======
const app = require("./app");
const db = require("./db");
const { serverPort } = require("./config");

app.listen(serverPort, async () => {
  try {
    await db.connect();
    console.log(`Server running. Use our API on port: ${serverPort} `);
  } catch (error) {
    console.log(error.message);
  }
});
>>>>>>> Stashed changes
