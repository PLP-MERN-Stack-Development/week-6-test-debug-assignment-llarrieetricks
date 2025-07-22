// routes/bugRoutes.js
const express = require("express");
const router = express.Router();
const Bug = require("../models/Bug");

// Create a new bug
router.post("/", async (req, res) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all bugs
router.get("/", async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

// Update a bug
router.patch("/:id", async (req, res) => {
  const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bug);
});

// Delete a bug
router.delete("/:id", async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.json({ message: "Bug deleted" });
});

module.exports = router;
