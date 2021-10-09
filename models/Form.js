const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    options: { type: Object },
    name: { type: String },
    question: { type: String },
    answerType: { type: String },
    link: { type: String },
    responseCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);
