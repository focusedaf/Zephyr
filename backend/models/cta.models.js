import mongoose, { Schema } from "mongoose";

const ctaSchema = new Schema({
    // bson error if i use this
    // email: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },

  email: {
    type: String,
    require: true,
  },
});

export const CTA = mongoose.model("CTA", ctaSchema);
