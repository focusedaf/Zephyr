import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    // user comments on posts. question where(posts),what(content) and who(user)
    commentContent: {
      type: String,
      required: true,
    },
    posts: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
