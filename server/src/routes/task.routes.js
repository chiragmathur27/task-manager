const controllers = require("../controllers/task.controller");

const routes = [
  {
    method: "GET",
    url: "/tasks",
    handler: controllers.getTasks,
  },
  {
    method: "GET",
    url: "/tasks/:id",
    handler: controllers.getTaskById,
  },
  {
    method: "POST",
    url: "/tasks",
    handler: controllers.saveTask,
  },
  {
    method: "PUT",
    url: "/tasks/:id",
    handler: controllers.updateTask,
  },
  {
    method: "DELETE",
    url: "/tasks/:id",
    handler: controllers.deleteTask,
  },
];

module.exports = routes;
