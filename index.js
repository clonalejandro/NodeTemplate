const express = require('express')
//const path = require('path')
//const fs = require('fs')
const http = require('http')
//const https = require('https')
const server = express()
const cl1b = require('./cl1b')
const actions = require('./actions')
const app = {
    port: {
        http: 3000,
        https: 3003
    }
    //ssl: {
      //key: fs.readFileSync('/etc/letsencrypt/live/play.divecrafts.net/privkey.pem', 'utf8'),
      //cert: fs.readFileSync('/etc/letsencrypt/live/play.divecrafts.net/cert.pem', 'utf8')
    //}
}


//TODO: Make a ratelimit
server.use(express.urlencoded())
server.use(express.json())

actions.forEach(action => {
    switch (action.type.toLowerCase()){
        case 'get':
            cl1b.get(server, action.id, action.callback)
            break
        case 'post':
            cl1b.post(server, action.id, action.callback)
            break
        case 'put':
            cl1b.put(server, action.id, action.callback)
            break
        case 'delete':
            cl1b.delete(server, action.id, action.callback)
            break
        default:
            throw new Error('Unknown action type')            
    }
})

//https.createServer(app.ssl, server)
    //.listen(app.port.https, portHook(app.port.https))
http.createServer(server)
    .listen(app.port.http, cl1b.portHook(app.port.http))