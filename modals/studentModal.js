const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  dno: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mailId: {
    type: String,
    required: true,
    unique: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
