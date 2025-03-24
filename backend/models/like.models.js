import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    // user can like posts(single or multiple),comments(single or multiple)
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    
    likedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
