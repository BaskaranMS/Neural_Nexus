const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoute");
const adminRoutes = require("./routes/adminRoutes");

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

//cors option
const corsOption = {
  origin: "*",
};

app.use(cors(corsOption));
// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://<baskaranms>:<baskaranms>@cluster0.1w6llyo.mongodb.net/neural_nexus?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes); // Added admin routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
