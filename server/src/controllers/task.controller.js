const boom = require("boom");

const Task = require("../models/task.model");

const getTasks = async (req, reply) => {
  try {
    const tasks = await Task.find();

    reply.code(200).send(tasks);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getTaskById = async (req, reply) => {
  try {
    const task = await Task.findById(req.params.id);

    reply.code(200).send(task);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const saveTask = async (req, reply) => {
  try {
    const task = new Task(req.body);

    await task.save();

    reply.code(201).send(task);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateTask = async (req, reply) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    reply.code(200).send(task);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteTask = async (req, reply) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    reply.code(204).send();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// module.exports = {
//   getTasks,
// };
module.exports = {
  getTasks,
  getTaskById,
  saveTask,
  updateTask,
  deleteTask,
}
