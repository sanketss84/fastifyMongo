// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true
})

// fastify cors configuration
// read more https://github.com/fastify/fastify-cors
fastify.register(require('fastify-cors'), { 
	// put your options here
})

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose
	.connect('mongodb://localhost:27017/fastifyMongo', { useNewUrlParser: true })
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))

module.exports = fastify
