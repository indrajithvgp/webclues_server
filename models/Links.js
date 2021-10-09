const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    answer: { type: String, required: true },
    ref:'Form'
  },
  { timestamps: true }
);

module.exports = mongoose.model("Link", linkSchema);
