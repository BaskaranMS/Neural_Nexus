const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// POST: Register a student
router.post("/register", studentController.registerStudent);

// PUT: Edit payment status of a student
router.put('/editPayment/:dno', studentController.editPaymentStatus);

module.exports = router;
