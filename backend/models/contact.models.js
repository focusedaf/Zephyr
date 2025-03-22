import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    query: {
      type: String,
      require: true,
    },
    feedback: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
