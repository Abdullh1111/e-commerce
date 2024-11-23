// config.js
const dotenv = require("dotenv");

// Load environment variables from the .env file
dotenv.config();

module.exports = {
  port: process.env.PORT,
  db: process.env.DB,
  jwt_secret: process.env.JWT_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  cloud_api_key: process.env.CLOUD_API_KEY,
  cloud_api_secret: process.env.CLOUD_API_SECRET,
};
