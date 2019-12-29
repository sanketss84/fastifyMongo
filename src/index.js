// Import Server
const fastify = require('./server.js')

// Declare a route
// fastify.get('/', async (request, reply) => {
//     return { hello: 'world' }
// })

 //Routes ----------------------------------------------
const routes = require('./routes')

// Swagger ---------------------------------------------
// https://github.com/fastify/fastify-swagger

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Loop over each route
routes.forEach((route, index) => {
	fastify.route(route)
})

// fastify.listen(3000)
//fastify.swagger()
//fastify.log.info(`listening on ${fastify.server.address().port}`)

// Run the server!
const start = async () => {
    try {
            await fastify.listen(3000)
            fastify.log.info(`server listening on ${fastify.server.address().port}`)
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    }
start()