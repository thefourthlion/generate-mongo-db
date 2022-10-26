const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    data1: {
      type: String,
      require: [true, "Please provide data1"],
      default: "",
    },
    data2: {
      type: String,
      required: [true, "Please provide data2"],
      default: "",
    },
    data3: {
      type: String,
      required: [true, "Please provide data3"],
      default: "",
    },
    data4: {
      type: String,
      required: [true, "Please provide data4"],
      default: "",
    },
    data5: {
      type: String,
      required: [true, "Please provide data5"],
      default: "",
    },
  },
  { timestamps: true }
);

const post = mongoose.model("post", postSchema);

module.exports = post;
