const studentService = require("../services/studentService");

// POST: Register a new student
const registerStudent = async (req, res) => {
  try {
    const studentData = req.body;
    const newStudent = await studentService.registerStudent(studentData);
    return res.status(201).json({
      message: "Student registered successfully!",
      student: newStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error registering student",
      error: error.message,
    });
  }
};

// PUT: Edit payment status of a student
const editPaymentStatus = async (req, res) => {
  try {
      const { dno } = req.params;
      const { paymentStatus } = req.body;
      
      const updatedStudent = await studentService.editPaymentStatus(dno, paymentStatus);
      return res.status(200).json({
          message: 'Payment status updated successfully!',
          student: updatedStudent
      });
  } catch (error) {
      return res.status(500).json({
          message: 'Error updating payment status',
          error: error.message
      });
  }
};

module.exports = {
  registerStudent,
  editPaymentStatus
};
