const express = require("express");
const server = express();
server.use(express.json());

const projectsRouter = require("./project/router");
server.use("/api/projects", projectsRouter);

const resourceRouter = require("./resource/router");
server.use("/api/resources", resourceRouter);

const taskRouter = require("./task/router");
server.use("/api/tasks", taskRouter);

server.get("/", () => {
  res.status(200).json({
    statusCode: 200,
    message: "Server is up and runing",
  });
});

module.exports = server;
