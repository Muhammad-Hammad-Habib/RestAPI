import mongoose, { mongo } from "mongoose";
const std_schema = mongoose.Schema({
  std_name: {
    type: String,
    require: true,
    trim: true,
  },
  std_age: {
    type: Number,
    require: true,
  },
  fee: {
    type: Number,
    require: true,
    // validate: (value) != 0,
  },
  created: {
    type: String,
    default: Date.now(),
  },
});

const std_model = mongoose.model("student_info", std_schema);

export default std_model
