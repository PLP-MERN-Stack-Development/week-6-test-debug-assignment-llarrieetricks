// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const bugRoutes = require("./routes/bugRoutes");
app.use("/api/bugs", bugRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(5000, () => console.log("Server running on port 5000")))
.catch(err => console.log("MongoDB connection error:", err));
