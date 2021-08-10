const express = require("express")
const server = express()
// const helmet = require("helmet")
const cors = require("cors")



const carRouter = require("./cars/cars-router")


server.use("/api/cars" , carRouter)

server.use(cors())
// server.use(helmet())




// DO YOUR MAGIC

module.exports = server
