import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  { 
    // post has its content,title,views,published by stuff
    postContent: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
