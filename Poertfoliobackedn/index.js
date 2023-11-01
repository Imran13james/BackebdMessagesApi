require('dotenv').config()
const express = require('express')
const app = express()
PORT = process.env.PORT || 5000;

const router = require('./Router/Router');
const DataBase = require("./Configration/Configration")
const cors = require("cors");
app.use(express.json())


async function Db() {
  DataBase()
  try {
    console.log("connected with Data Base")
  } catch (error) {
    console.log("Eror connecting with Data Base")
  }
}
Db()
app.use("/api", router)
app.use(cors())
async function Server() {
  try {
    await app.listen(PORT, () => {
      console.log(`serverr is running on the port ${PORT}`)
    })
  } catch (error) {

  }
}
Server()