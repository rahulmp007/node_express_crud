const app = require("./app");
const dotenv = require("dotenv");
const connect = require("./database/db");

dotenv.config({ path: "./.env" });

const User = require("./models/user.model");

const PORT = process.env.PORT || 8080;

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`mongodb connection err : ${err}`);
  });
