import mongoose, { mongo } from "mongoose";
const std_schema = mongoose.Schema({
  std_name: {
    type: String,
    required: true,
    trim: true,
  },
  std_age: {
    type: Number,
    required: true,
  },
  fee: {
    type: mongoose.Decimal128,
    required: true,
    validate: (value) => value > 0,
  },
  created: {
    type: String,
    default: Date.now(),
  },
});

const std_model = mongoose.model("student_info", std_schema);

export default std_model
