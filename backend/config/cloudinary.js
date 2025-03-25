import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

// return from multer is local file path
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.error(" No file path provided!");
      return null;
    }

    // since cloudinary loves forward slashes
    const normalizedPath = path.resolve(localFilePath);

    const uploadedFile = await cloudinary.uploader.upload(normalizedPath, {
      resource_type: "auto",
      folder: "zephyr",
    });
    console.log("Upload Successful: " + uploadedFile.secure_url);

    // delete file from server once its been uploaded
    fs.unlinkSync(normalizedPath);
    return uploadedFile;
  } catch (error) {
    fs.unlinkSync(normalizedPath);
    return null;
  }
};

export { uploadOnCloudinary };
