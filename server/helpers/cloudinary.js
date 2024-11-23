const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const config  = require("../config");

cloudinary.config({
  cloud_name: config?.cloud_name|| "",
  api_key: config?.cloud_api_key || "",
  api_secret: config?.cloud_api_secret || "",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
