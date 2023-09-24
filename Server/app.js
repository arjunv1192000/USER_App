import express from  'express'
import http from "http";
import expressConfig from "./express.js";
import serverConfig from "./server.js";
import connectDB from "./connection.js";
import routes from './src/Framework/Webserver/routes/index.js';
import config from './config.js';


const app=express()
const server=http.createServer(app)


connectDB(config)
expressConfig(app);
serverConfig(app);
routes(app,express)
app.all('*',(req,res,next)=>{
    next(new Error('not found'))
})

serverConfig(server,config).startServer() 