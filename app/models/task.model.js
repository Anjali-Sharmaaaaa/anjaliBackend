const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    taskname: String,
    description: String
  })
);

module.exports = Task;
