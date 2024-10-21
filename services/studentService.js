const Student = require("../modals/studentModal");

// Register a new student
async function registerStudent(studentData) {
  try {
    const student = new Student(studentData);
    return await student.save();
  } catch (error) {
    throw new Error(error.message);
  }
}

// Edit payment status of a student
async function editPaymentStatus(dno, paymentStatus) {
  try {
      const student = await Student.findOneAndUpdate(
          { dno: dno }, 
          { paymentStatus: paymentStatus }, 
          { new: true }
      );
      if (!student) {
          throw new Error(`Student with DNO: ${dno} not found`);
      }
      return student;
  } catch (error) {
      throw new Error(error.message);
  }
}

module.exports = {
  registerStudent,
  editPaymentStatus
};
