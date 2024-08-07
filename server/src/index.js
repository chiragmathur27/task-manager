const fastify = require("fastify")({
  logger: true,
});
require("./utils/mongoose");

const taskRoutes = require("./routes/task.routes");
const swagger = require("./utils/swagger");

fastify.register(require("fastify-swagger"), swagger.options);

fastify.register(require('fastify-cors'), {
  origin:'*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  
})

taskRoutes.forEach((route) => {
  fastify.route(route);
});



const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
