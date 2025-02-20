import mongoose from "mongoose";

const blacklistSchema = mongoose.Schema(
  {
    token: String,
  },
  { timestamps: true }
);
const Blacklist = mongoose.model("Blacklist", blacklistSchema);

export default Blacklist;
