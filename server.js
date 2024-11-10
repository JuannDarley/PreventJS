// Import Framework fastify
import { fastify } from 'fastify';
// Import Class DatabaseMemory

import { DatabaseMemory } from './database-memory.js';

// Create server 
const server = fastify()

// Create variable database
const database = new DatabaseMemory() 

// Resquest Body

server.post('/videos', (request, reply) => {

    const { title, description, duration} = request.body

    database.create({

        title,
        description,
        duration,

    })
   
    return reply.status(201).send()
})

server.get('/videos', () =>{
    const videos = database.list()

    return videos
})

server.put('/videos/:id', (request, reply) => { 
    const videoId =  request.params.id
    const { title, description, duration} = request.body

    database.update(videoId, {
        title,
        description,
        duration,

    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId =  request.params.id
    
    database.delete(videoId)

    return reply.status(204).send()
})  

// Defined port
server.listen ({
    port: 3333,
})
